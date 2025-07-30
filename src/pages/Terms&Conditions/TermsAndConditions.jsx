import { Link } from 'react-router-dom'

export default function TermsAndConditions(){
  return(
    <div className="bg-sky-400 text-white flex flex-col justify-center items-center">
    <h1 className="text-lg font-bold flex p-5  justify-center items-center">Terms & Conditions</h1>
    <div className='flex felx-col justify-center items-center'>
    <Link className='text-lg flex-col justify-center items-center w-24 bg-yellow-400 text-white rounded p-3 mb-10 font-bold text-center' to='/' >Go Back Home</Link>

    </div>
    <p className="px-10 text-lg font-bold text-center">
      This contract has an expiration date of 12 months after sign up.
    </p>  
    <p className="px-10 text-md font-semibold text-center">
      Anyone 18 years old or older trying to take a DMV test is not required to do Drivers Education or Drivers training.
    </p>  
<ul className="p-10 flex-col font-semibold gap-10 lg:w-1/2 justify-center align-center">
    {/* {terms.map((term, idx) =>
        <li key={idx} className="my-4">{term}</li>
        )} */}
        <li className="my-4">1. Your contract starts from the day you sign up. Be sure to take your lessons within the specified amount of time. Do not let your contract expire.</li>
        <li className="font-bold my-4">2. Package Price Agreement:</li>
        <li className="my-4">To take advantage of our discounted package rates, full payment must be made in advance. Please note the following:</li>
          <li className="my-4 ml-5">•	Package prices cannot be split into multiple payments.</li>
          <li className="my-4 ml-5" >•	Single lessons purchased at the standard rate cannot be applied toward or upgraded to a package at a later.</li>
        <li className="my-4">3. All driving appointments made are confirmed on first call no matter which family member schedules the lesson. Driving lessons are first come, first serve. If you would like an earlier lesson than your already scheduled time, please request to be placed on a cancellation list.</li>
        <li className="my-4">4. It is the customer's sole responsibility to communicate driving lesson appointments with family members.</li>
        <li className="my-4">5. If you cannot give us a 48 hour cancellation notice, you can make an arrangement to switch the lesson with another student. Please be aware that if the student does not show up for the lesson, you will be responsible for the cancellation fee. You will need to contact our office to let us know which student will be taking your lesson.</li>
        <li className="my-4">6. All questions must be directed to the office. Driver instructors will refer you back to the office unless the question is about the student's lesson performance.</li>
        <li className="my-4">7. For specific lesson performance questions, please make sure that you contact us as soon as possible after the lesson.</li>
        <li className="my-4">8. If we are late picking up the student, the student will get the full 2 hours driving from pick up time. The lesson may sometimes go over two hours depending on traffic. (No extra fee)</li>
        <li className="my-4">9. No one is allowed in our vehicles during driving lessons except for the students and instructor.</li>
        <li className="my-4">10. Students ability to learn within the six (6) hour period may vary depending on the student's abilities. The DMV requires any minors taking the driving test to complete a minimum of 50 hours of driving before they can take the test. We urge parents to practice as much as possible with their children.</li>
        <li className="my-4">11. We do not guarantee the same instructor or vehicle for each lesson. While we try to accommodate requests, they are not guaranteed. If you only wish to work with specific instructors, you must notify the office in advance - otherwise, we will asign an available instructor.</li>
        <li className="font-bold my-4">12. Behind-the-Wheel Drive Test Package Policy:</li>
        <li className="my-4 ml-5">DMV behind-the-wheel test services are not included in any of our lesson packages and must be scheduled and paid for separately.
The test service fee applies each time the DMV test is taken.
Drive Test Package is non-refundable once the service is provided, regardless of the test outcome. Our standard cancellation policy also applies to this service.</li>
        <li className="my-4">13. During our busier times, our first availability could be between one or several weeks.</li>
        <li className="my-4">14. We reserve the right to refuse service to anyone.</li>
        <li className="my-4">15. For the safety and security of our students, instructors and others, there may or may not be video surveillance at the driving school and in company vehicles.</li>
        <li className="my-4">16. Two hours of continual driving could be too long  for any new driver to be on the road. For this reason, if requested by the student we may take up to 10 minutes to allow the student to get some relief and clear their heads so that they can continue to learn to drive safely.</li>
        <li className="font-bold my-4">17. Cancellation Policy:</li>
        <li className="my-4 ml-5">48-Hour Notice</li>
        <li className="my-4 ml-5">Rescheduling or cancellations require at least 48 hours’ notice. Less notice will result in a $50 fee.</li>
	<li className="my-4 ml-10">•	No-shows (arriving more than 15 minutes late after the instructor arrives)</li>
<li className="my-4 ml-10">	•	Cancellations within 2 hours of the lesson, or after the instructor has arrived will result in forfeiture of the lesson.</li>
        <li className="my-4 ml-5">Weekend cancellations </li>
        <li className="my-4 ml-10">• To cancel Saturday, Sunday, or Monday lessons, please notify us by 3:00 PM on the preceding Friday.</li>
        <li className="my-4 ml-5">Schedule changes</li>
        <li className="my-4 ml-10">• All lesson scheduling, rescheduling, or cancellations must be arranged through our administrative office only. Instructors are not authorized to make schedule changes directly.</li>
        <li className="font-bold my-4">18. Learner’s Permit Policy:</li>
        <li className="my-4 ml-5">• Students are required to present a valid learner’s permit at the time of pick-up.</li>
        <li className="my-4 ml-5">• If the student does not have their permit, the lesson will be canceled and forfeited, with no refund or rescheduling option available.</li>
        <li className="font-bold my-4">19. Refund Policy:</li>
        <li className="my-4 ml-5">All purchases are non-refundable, except when a written request for early cancellation is submitted within two weeks of the initial sign-up date.</li>
        <li className="my-4 ml-10">• No refunds will be given once a lesson has been completed.</li>
        <li className="my-4 ml-10">• Once a package has been purchased and at least one lesson completed, no refunds will be issued for the remaining lessons.</li>
        <li className="font-bold my-4">20. Freeway Driving Policy:</li>
        <li className="my-4 ml-5">• The Department of Motor Vehicles does not require freeway driving as part of Driver Training courses. At Grace’s Driving School, we follow a strict safety-first policy.</li>
        <li className="my-4 ml-5">• Therefore, freeway driving is not guaranteed and is offered solely at the instructor’s discretion, based on the student’s readiness and current road conditions.</li>
        {/* <li className="my-4 ml-10">• </li> 
        <li className="my-4"></li>
        <li className="my-4"></li>
        <li className="my-4"></li>
        <li className="my-4"></li>
        */}
  </ul>


<ul className="font-semibold px-10 pb-5 mb-5">
    <li className="font-bold my-4">Other Fees</li>
    <li className="my-4 ml-5">
A $25.00 fee will be charged for any duplicate certificate request. This includes:
</li>
    <li className="my-4 ml-5">
	1.	DL 400B – Certificate of Completion of Driver Education
</li>
    <li className="my-4 ml-5">
	2.	DL 400C – Certificate of Completion of Non-Classroom Driver Education
</li>
All requests for duplicate certificates must be made directly through our office during regular business hours.
</ul>
</div>
  );
}
