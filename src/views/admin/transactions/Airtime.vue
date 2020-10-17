<template>

    <section>
        <b-field grouped group-multiline>
            <b-select v-model="defaultSortDirection">
                <option value="asc">Default sort direction: ASC</option>
                <option value="desc">Default sort direction: DESC</option>
            </b-select>
            <b-select v-model="perPage" :disabled="!isPaginated">
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="15">15 per page</option>
                <option value="20">20 per page</option>
            </b-select>
            <div class="control">
                <button class="button" @click="currentPage = 2" :disabled="!isPaginated">Set page to 2</button>
            </div>
            <div class="control is-flex">
                <b-switch v-model="isPaginated">Paginated</b-switch>
            </div>
            <div class="control is-flex">
                <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
            </div>
            <b-select v-model="paginationPosition" :disabled="!isPaginated">
                <option value="bottom">bottom pagination</option>
                <option value="top">top pagination</option>
                <option value="both">both</option>
            </b-select>
            <b-select v-model="sortIcon">
                <option value="arrow-up">Arrow sort icon</option>
                <option value="menu-up">Caret sort icon</option>
                <option value="chevron-up">Chevron sort icon </option>
            </b-select>
            <b-select v-model="sortIconSize">
                <option value="is-small">Small sort icon</option>
                <option value="">Regular sort icon</option>
                <option value="is-medium">Medium sort icon</option>
                <option value="is-large">Large sort icon</option>
            </b-select>
        </b-field>

        <b-table
                :data="data"
                :paginated="isPaginated"
                :per-page="perPage"
                :current-page="currentPage"
                :pagination-simple="isPaginationSimple"
                :pagination-position="paginationPosition"
                :default-sort-direction="defaultSortDirection"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                default-sort="user.first_name"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page">

            <b-table-column field="id" label="ID" width="40" sortable numeric v-slot="props">
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="user.first_name" label="First Name" sortable v-slot="props">
                {{ props.row.user.first_name }}
            </b-table-column>

            <b-table-column field="user.last_name" label="Last Name" sortable v-slot="props">
                {{ props.row.user.last_name }}
            </b-table-column>

            <b-table-column field="date" label="Date" sortable centered v-slot="props">
                <span class="tag is-success">
{{ new Date(props.row.date).toLocaleDateString() }}
                </span>
            </b-table-column>

            <b-table-column label="Provider" v-slot="props">
                <span>
<b-icon pack="fas"
        :icon="props.row.provider === 'MTN' ? 'mars' : 'venus'">
</b-icon>
{{ props.row.provider }}
                </span>
            </b-table-column>

        </b-table>
    </section>
</template>

<script>
    const data = [{"id":1,"user":{"first_name":"Jesse","last_name":"Simmons"},"date":"2016/10/15 13:43:27","provider":"MTN"},
        {"id":2,"user":{"first_name":"John","last_name":"Jacobs"},"date":"2016/12/15 06:00:53","provider":"MTN"},
        {"id":3,"user":{"first_name":"Tina","last_name":"Gilbert"},"date":"2016/04/26 06:26:28","provider":"Airtel"},
        {"id":4,"user":{"first_name":"Clarence","last_name":"Flores"},"date":"2016/04/10 10:28:46","provider":"MTN"},
        {"id":5,"user":{"first_name":"Anne","last_name":"Lee"},"date":"2016/12/06 14:38:38","provider":"Airtel"},
        {"id":6,"user":{"first_name":"Sara","last_name":"Armstrong"},"date":"2016/09/23 18:50:04","provider":"Airtel"},
        {"id":7,"user":{"first_name":"Anthony","last_name":"Webb"},"date":"2016/08/30 23:49:38","provider":"MTN"},
        {"id":8,"user":{"first_name":"Andrew","last_name":"Greene"},"date":"2016/11/20 14:57:47","provider":"MTN"},
        {"id":9,"user":{"first_name":"Russell","last_name":"White"},"date":"2016/07/13 09:29:49","provider":"MTN"},
        {"id":10,"user":{"first_name":"Lori","last_name":"Hunter"},"date":"2016/12/09 01:44:05","provider":"Airtel"},
        {"id":11,"user":{"first_name":"Ronald","last_name":"Wood"},"date":"2016/12/04 02:23:48","provider":"MTN"},
        {"id":12,"user":{"first_name":"Michael","last_name":"Harper"},"date":"2016/07/27 13:28:15","provider":"MTN"},
        {"id":13,"user":{"first_name":"George","last_name":"Dunn"},"date":"2017/03/07 12:26:52","provider":"MTN"},
        {"id":14,"user":{"first_name":"Eric","last_name":"Rogers"},"date":"2016/06/07 05:41:52","provider":"MTN"},
        {"id":15,"user":{"first_name":"Juan","last_name":"Meyer"},"date":"2017/02/01 04:56:34","provider":"MTN"},
        {"id":16,"user":{"first_name":"Silvia","last_name":"Rosa"},"date":"2017/01/26 11:50:04","provider":"Airtel"},
        {"id":17,"user":{"first_name":"Lori","last_name":"Cunningham"},"date":"2016/05/01 10:00:56","provider":"Airtel"},
        {"id":18,"user":{"first_name":"Charles","last_name":"Graham"},"date":"2016/05/31 06:43:30","provider":"MTN"},
        {"id":19,"user":{"first_name":"Henry","last_name":"Morrison"},"date":"2016/09/27 16:15:44","provider":"MTN"},
        {"id":20,"user":{"first_name":"Albert","last_name":"Mendoza"},"date":"2016/08/08 05:29:24","provider":"MTN"},
        {"id":21,"user":{"first_name":"Ruby","last_name":"Snyder"},"date":"2017/04/01 12:04:39","provider":"Airtel"},
        {"id":22,"user":{"first_name":"Jesse","last_name":"Warren"},"date":"2016/08/20 01:36:38","provider":"MTN"},
        {"id":23,"user":{"first_name":"Carlos","last_name":"Ferguson"},"date":"2016/05/31 10:40:29","provider":"MTN"},
        {"id":24,"user":{"first_name":"Melissa","last_name":"Peters"},"date":"2016/07/23 00:41:54","provider":"Airtel"},
        {"id":25,"user":{"first_name":"Arthur","last_name":"Garza"},"date":"2017/03/11 14:11:37","provider":"MTN"},
        {"id":26,"user":{"first_name":"Joe","last_name":"Berry"},"date":"2016/07/09 15:16:56","provider":"MTN"},
        {"id":27,"user":{"first_name":"Joseph","last_name":"Bishop"},"date":"2016/10/04 19:44:54","provider":"MTN"},
        {"id":28,"user":{"first_name":"Sarah","last_name":"Harper"},"date":"2016/09/23 05:09:11","provider":"Airtel"},
        {"id":29,"user":{"first_name":"Christopher","last_name":"Fuller"},"date":"2016/04/12 00:05:35","provider":"MTN"},
        {"id":30,"user":{"first_name":"Alan","last_name":"Mendoza"},"date":"2016/04/22 10:48:02","provider":"MTN"},
        {"id":31,"user":{"first_name":"James","last_name":"Davis"},"date":"2017/01/16 15:17:03","provider":"MTN"},
        {"id":32,"user":{"first_name":"Scott","last_name":"Welch"},"date":"2016/10/04 23:31:51","provider":"MTN"},
        {"id":33,"user":{"first_name":"Mildred","last_name":"Myers"},"date":"2016/11/23 13:46:18","provider":"Airtel"},
        {"id":34,"user":{"first_name":"Victor","last_name":"Martinez"},"date":"2016/04/06 17:05:07","provider":"MTN"},
        {"id":35,"user":{"first_name":"Susan","last_name":"Medina"},"date":"2016/12/09 10:33:37","provider":"Airtel"},
        {"id":36,"user":{"first_name":"Judy","last_name":"Long"},"date":"2016/07/26 16:19:04","provider":"Airtel"},
        {"id":37,"user":{"first_name":"Joan","last_name":"Myers"},"date":"2016/09/22 04:55:54","provider":"Airtel"},
        {"id":38,"user":{"first_name":"Rachel","last_name":"Gonzales"},"date":"2016/07/15 13:56:38","provider":"Airtel"},
        {"id":39,"user":{"first_name":"Roger","last_name":"Hunt"},"date":"2016/08/14 10:43:11","provider":"MTN"},
        {"id":40,"user":{"first_name":"Dorothy","last_name":"Howard"},"date":"2016/06/19 05:34:49","provider":"Airtel"},
        {"id":41,"user":{"first_name":"Eugene","last_name":"Lynch"},"date":"2016/12/24 08:19:24","provider":"MTN"},
        {"id":42,"user":{"first_name":"Kathy","last_name":"Webb"},"date":"2017/04/01 21:09:05","provider":"Airtel"},
        {"id":43,"user":{"first_name":"Antonio","last_name":"White"},"date":"2017/02/10 06:51:20","provider":"MTN"},
        {"id":44,"user":{"first_name":"Louis","last_name":"Spencer"},"date":"2016/10/08 02:20:22","provider":"MTN"},
        {"id":45,"user":{"first_name":"Andrea","last_name":"Marshall"},"date":"2016/09/04 10:59:57","provider":"Airtel"},
        {"id":46,"user":{"first_name":"Eugene","last_name":"Sims"},"date":"2017/03/15 06:39:48","provider":"MTN"},
        {"id":47,"user":{"first_name":"Mildred","last_name":"Gibson"},"date":"2016/04/18 06:43:54","provider":"Airtel"},
        {"id":48,"user":{"first_name":"Joan","last_name":"Arnold"},"date":"2016/12/16 04:52:23","provider":"Airtel"},
        {"id":49,"user":{"first_name":"Jesse","last_name":"Schmidt"},"date":"2016/06/11 02:44:33","provider":"MTN"},
        {"id":50,"user":{"first_name":"David","last_name":"Frazier"},"date":"2017/02/15 21:46:30","provider":"MTN"},
        {"id":51,"user":{"first_name":"Nicholas","last_name":"Howell"},"date":"2016/11/01 15:08:31","provider":"MTN"},
        {"id":52,"user":{"first_name":"Douglas","last_name":"Chapman"},"date":"2017/02/08 03:33:24","provider":"MTN"},
        {"id":53,"user":{"first_name":"Bruce","last_name":"Simmons"},"date":"2016/07/14 12:11:17","provider":"MTN"},
        {"id":54,"user":{"first_name":"Antonio","last_name":"George"},"date":"2016/11/07 19:12:55","provider":"MTN"},
        {"id":55,"user":{"first_name":"Chris","last_name":"Marshall"},"date":"2016/07/03 12:11:45","provider":"MTN"},
        {"id":56,"user":{"first_name":"Ashley","last_name":"Hudson"},"date":"2016/10/14 21:08:05","provider":"Airtel"},
        {"id":57,"user":{"first_name":"Alan","last_name":"Edwards"},"date":"2017/03/22 21:10:25","provider":"MTN"},
        {"id":58,"user":{"first_name":"George","last_name":"Clark"},"date":"2016/04/28 03:15:05","provider":"MTN"},
        {"id":59,"user":{"first_name":"Frank","last_name":"Porter"},"date":"2016/09/08 00:48:14","provider":"MTN"},
        {"id":60,"user":{"first_name":"Christopher","last_name":"Palmer"},"date":"2016/05/24 08:58:12","provider":"MTN"}]

    export default {
        name: "Airtime",
        data() {
            return {
                data,
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 20
            }
        }
    }
</script>