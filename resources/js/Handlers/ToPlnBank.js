export default function ToPlnBank () {

    return () => {
        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {
            this.withdrawAmount = (this.invoiceAmount / RATE_UAHUSD) * FIAT_PROFIT * this.rate_usdpln;
        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {
            if (this.city) {
                this.withdrawAmount = (((this.invoiceAmount * this.city.coeff) / RATE_UAHUSD) * FIAT_PROFIT) * this.rate_usdpln
                this.itKey++
            } else {
                alert('Оберіть місто')
            }
        } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {
            if (this.city) {
                this.withdrawAmount = (((this.invoiceAmount * this.city.coeff) * FIAT_PROFIT) * this.rate_usdpln)
                this.itKey++
            } else {
                alert('Оберіть місто')
            }
        } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {
            if (this.city) {
                this.withdrawAmount = (((this.invoiceAmount * this.rate_eurusd * this.city.coeff) * FIAT_PROFIT) * this.rate_usdpln)
                this.itKey++
            } else {
                alert('Оберіть місто')
            }
        } else if (this.currency_1.cc === 'USDT' && this.currency_1.type === 'crypto') {
            this.withdrawAmount = ((this.invoiceAmount * CRYPTA_PROFIT_EU) * this.rate_usdpln)
            this.itKey++
        }
    }
}
