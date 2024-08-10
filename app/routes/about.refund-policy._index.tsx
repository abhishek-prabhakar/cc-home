import { Container, Space, Text, Title } from "@mantine/core";

// export default function () {

//     return <Container>
//         <Title order={3}>Cancellation &amp; Refund Policy</Title>
//         <Space h="md" />
//         <p>Last updated on Feb 19th 2024</p>
//         <p>
//             celebria collective believes in helping its customers as far as possible,
//             and has therefore a liberal cancellation policy. Under this policy:
//         </p>
//         <ul>
//             <li>
//                 <p>
//                     Cancellations will be considered only if the request is made within
//                     2 days of placing the order. However, the cancellation request
//                     may not be entertained if the orders have been communicated to
//                     the vendors/merchants and they have initiated the process of shipping them.
//                 </p>
//             </li>
//             <li>
//                 <p>
//                     celebria collective does not accept cancellation
//                     requests for perishable items like flowers, eatables etc.
//                     However, refund/replacement can be made if the customer establishes
//                     that the quality of product delivered is not good.
//                 </p>
//             </li>
//             <li>
//                 <p>
//                     In case of receipt of damaged or defective items please report the
//                     same to our Customer Service team. The request will, however,
//                     be entertained once the merchant has checked and determined the
//                     same at his own end. This should be reported within
//                     2 days of receipt of the
//                     products.
//                 </p>
//             </li>
//             <li>
//                 <p>
//                     In case you feel that the product received is not as shown on the site
//                     or as per your expectations, you must bring it to the notice of our
//                     customer service within 2 days of
//                     receiving the product. The Customer Service Team after looking into your
//                     complaint will take an appropriate decision.
//                 </p>
//             </li>
//             <li>
//                 <p>
//                     In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
//                 </p>
//             </li>
//             <li>
//                 <p>
//                     In case of any Refunds approved by the
//                     celebria collective, it’ll take
//                     3-5 days for the refund to
//                     be processed to the end customer.
//                 </p>
//             </li>
//         </ul>
//     </Container>

// }


export default function () {
    return <Container>
            <Title order={3}>Cancellation and Refund Policy</Title>
            <Space h="md" />
         <p>Last updated on Aug 9th 2024</p>
         <p>
            At Celebria Collective, we strive to provide exceptional services and experiences. We understand that plans can change, and therefore, we have established a comprehensive cancellation and refund policy to ensure fairness and transparency for both our users and vendors.
         </p>
         <ul>
            <li>
                <Title order={5}>Cancellation by Users:</Title>
                <p>Full Refund: If a booking is cancelled more than 14 days before the scheduled service date, a full refund will be issued.</p>
                <p>Partial Refund: If a booking is cancelled between 7 to 14 days before the scheduled service date, 50% of the total booking amount will be refunded.</p>
                <p>Short Notice Cancellation: If a booking is made within 7 days of the scheduled service date:</p>
                <p>More than 48 hours before the service date: 50% refund will be issued.</p>
                <p>Less than 48 hours before the service date: No refund will be issued.</p>
            </li>
            <li>
                <Title order={5}>Automatic Full Refund:</Title>
                <p>If a vendor cancels the booking at any time, a full refund will be issued to the user.</p>
                <p>Rescheduling Option: Users will be given the option to reschedule with the same vendor or choose a different vendor from our platform without any additional cost.</p>
            </li>
            <li>
                <Title order={5}>Force Majeure:</Title>
                <p>In the event of circumstances beyond our control (e.g., natural disasters, pandemics, government restrictions), Celebria Collective reserves the right to cancel bookings. In such cases, users will be offered a full refund or the option to reschedule the service at no additional cost.</p>
                Refund Process
                
                <p>Refund Request: Users can initiate a refund request through their account on the Celebria Collective platform.
                The refund request must be submitted within 14 days of the cancellation date. </p>
                
                <p>Processing Time: Refunds will be processed within 7-10 business days from the date of approval.
                Users will be notified via email once the refund has been processed.</p>
                
                <p>Payment Method: Refunds will be credited back to the original payment method used at the time of booking.
                In case of any discrepancies, users are advised to contact their bank or payment provider.
                Other Considerations</p>
                <p>Non-Refundable Items: Any additional services or products purchased through Celebria Collective (e.g., digital assets, special equipment) are non-refundable once delivered.</p>
            
                <p>Late or Missing Refunds:  If users have not received a refund within the specified timeframe, they should first check their bank account or contact their credit card company.
                If the issue persists, users are advised to contact Celebria Collective's customer support for further assistance.</p>

                <p>Exceptional Circumstances: Celebria Collective reserves the right to assess refunds on a case-by-case basis for exceptional circumstances not covered by the standard policy.</p>
            </li>
            <li>
                <Title order={5}> Policy Changes:</Title>
                <p>Celebria Collective reserves the right to update this policy periodically. Vendors will be notified of any significant changes through the platform or email.
                By joining Celebria Collective, vendors agree to adhere to this cancellation policy and strive to provide exceptional service to our users.</p>
            </li>
        </ul>
    </Container>;
}