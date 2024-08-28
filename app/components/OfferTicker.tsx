import { SUPPORT_CENTER } from "~/data/common.data"

export function OfferTicker() {
    const coupon = {
        code: 'NEW15',
        offerPrice: '15%'
    }

    return <div style={{ background: 'black', color: '#d8d8d8', fontSize: '10px', padding: '5px 10px', textAlign: 'center' }}>
        {/* Use code {coupon.code} to get {coupon.offerPrice} discount. */}
        Call us at {SUPPORT_CENTER.PHONE}
    </div>
}