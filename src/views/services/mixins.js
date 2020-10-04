export const mobile = {

    methods:
        {
            updateActiveVoucher(voucher) {
                this.activeVoucher = voucher
            }
            ,
            updateBeneficiaryPhoneNumber(number) {
                console.info('updateNumberAndCarrier', typeof number, number)
                this.beneficiaryPhoneNumber = number
            }
            ,
            updateActiveCarrier(carrier) {
                console.info('updateNumberAndCarrier', typeof carrier, carrier)
                this.activeCarrier = carrier
                // this.activeVoucher = voucher
            }

        }
}