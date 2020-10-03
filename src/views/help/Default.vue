
<template>
    <div class="content">

        <div class="columns">
            <div class="column">
                <!--<h3>Single Active Item</h3>
                <p>Only one accordion item's details will be displayed at a time.</p>-->

                <!--<AppAccordion>
                </AppAccordion>-->


                <accordion id="accordion-example-1" :content="example1"></accordion>
            </div>
            <div class="column">
                <!--<h3>Multiple Active Items</h3>
                <p>Add the <code>multiple</code> attribute to allow more than one accordion item's details to be showing.</p>-->
                <accordion id="accordion-example-2" :content="example2" multiple="multiple"></accordion>
            </div>
        </div>
    </div>
</template>

<script>
    const exampleData1 = [
        {
            id: 1,
            active: true,
            title: 'Help Topic/Title #1',
            details: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum iaculis purus, non fermentum orci pellentesque vitae. Aliquam vel semper erat. In lacinia dapibus pretium. Vivamus in lacus tempor turpis ultrices venenatis non nec enim. Nullam vel pharetra quam. Pellentesque ut elit felis. Quisque a augue a nisi accumsan.</p>
      <ul>
        <li>I just want to talk.</li>
        <li>It has nothing to do with mating.</li>
        <li>Fry, that doesn't make sense.</li>
      </ul>
    `
        },
        {
            id: 2,
            active: false,
            title: 'Help Topic/Title #2',
            details: `
      <p>Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel ways about stuff!</p>
    `
        },
        {
            id: 3,
            active: false,
            title: `Help Topic/Title #3`,
            details: `
      <p>And then the battle's not so bad? You'll have all the Slurm you can drink when you're partying with Slurms McKenzie! Say it in Russian!</p>
      <p>Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.</p>
    `
        }
    ];
    const exampleData2 = [
        {
            id: 1,
            active: false,
            title: 'Help Topic/Title #1',
            details: `
      <p>Come on, this is a Bluth family celebration. It's no place for children.</p>
    `
        },
        {
            id: 2,
            active: false,
            title: 'Help Topic/Title #2',
            details: `
      <p>But where did the lighter fluid come from? Wine only turns to alcohol if you let it sit. But anyhoo, can you believe that the only reason the club is going under is because it's in a terrifying neighborhood?</p>
    `
        },
        {
            id: 3,
            active: false,
            title: `Help Topic/Title #3?`,
            details: `
      <p>In fact, it was a box of Oscar's legally obtained medical marijuana. Primo bud. Real sticky weed.</p>
      <p>Great, now I'm gonna smell to high heaven like a tuna melt!</p>
    `
        }
    ];

    // import AppAccordion from "../../components/AppElements/AppAccordion/AppAccordion";
    import Accordion from "../../components/AppElements/AppAccordion/Accordion";
    export default {
        name: "Default.vue",
        components: {
            // AppAccordion,
            Accordion
        },
        data() {
            return {
                example1: exampleData1,
                example2: exampleData2
            }
        }
    }
</script>

<style scoped>

</style>