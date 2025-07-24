import { Link } from 'react-router-dom'


let terms = ["1. Your contract starts from the day you sign up. Be sure to take your lessons within the specified amount of time. Do not let your contract expire.", "2. All packages must be paid in full and in advance of the 1st lesson otherwise discounts will not be applied.", "3. All driving appointments made are confirmed on first call no matter which family member schedules the lesson. Driving lessons are first come, first serve. If you would like an earlier lesson than your already scheduled time, please request to be placed on a cancellation list.","4. It is the customer's sole responsibility to communicate driving lesson appointments with family members.","5. If you cannot give us a 48 hour cancellation notice, you can make an arrangement to switch the lesson with another student. Please be aware that if the student does not show up for the lesson, you will be responsible for the cancellation fee. You will need to contact our office to let us know which student will be taking your lesson.","6. All questions must be directed to the office. Driver instructors will refer you back to the office unless the question is about the student's lesson performance.","7. For specific lesson performance questions, please make sure that you contact us as soon as possible after the lesson.","8. If we are late picking up the student, the student will get the full 2 hours driving from pick up time. The lesson may sometimes go over two hours depending on traffic. (No extra fee)","9. No one is allowed in our vehicles during driving lessons except for the students and instructor.","10. Students ability to learn within the six (6) hour period may vary depending on the student's abilities. The DMV requires any minors taking the driving test to complete a minimum of 50 hours of driving before they can take the test. We urge parents to practice as much as possible with their children.","11. No refunds for any used lessons.",
"12. No refunds for the drive test package.",
"13. During our busier times, our first availability could be between one or several weeks. ",
"14. We reserve the right to refuse service to anyone.",
"15. For the safety and security of our students, instructors and others, there may or may not be video surveillance at the driving school and in company vehicles.",
"16. Two hours of continual driving could be too long  for any new driver to be on the road. For this reason, if requested by the student we may take up to 10 minutes to allow the student to get some relief and clear their heads so that they can continue to learn to drive safely. "]

export default function TermsAndConditions(){
  return(
    <div className="bg-sky-400 text-white flex flex-col justify-center">
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
<ul className="p-10 flex-col font-semibold gap-10">
    {terms.map((term, idx) =>
        <li key={idx} className="my-4">{term}</li>
        )}
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
<ul className="font-semibold px-10 pb-5 mb-5">
<li className="my-4">
FULL PRICE AGREEMENT: If the discounted package price is not paid in advance, each lesson must be paid at the full standard rate.
</li>
 <li className="my-4">
LEARNERS PERMIT:
Students must present their learner's permit at the time of pick-up.
If a student does not have their permit, the lesson will be canceled and forfeited.
</li>
<li className="my-4">
48 HOUR NOTICE:
 A minimum of 48 hours notice is required for any rescheduling or cancellation. Failure to provide notice will result in a $50 late cancellation fee.
If the student is not present within 15 minutes of the scheduled pick-up time, the lesson will be marked as a no-show and forfeited. Any cancellations made within 2 hours of the scheduled lesson time will also result in a forfeiture of the lesson.
 </li>
  <li className="my-4">
WEEKEND CANCELLATIONS:
Cancellations for lessons scheduled on Saturday, Sunday, or Monday must be made by 3:00 PM on the preceding Friday.
  </li>
 <li className="my-4">
SCHEDULE EXCHANGES:
All lesson scheduling, rescheduling, or cancellations must be coordinated through our administrative office only. Instructors are not authorized to make schedule changes directly.</li>
<li className="my-4">
FREEWAY DRIVING:
The Department of Motor Vehicles does not require that Driver Training courses include driving on the freeway. We at Graces Driving School adhere to a strict policy of safety first. Therefore, I understand and agree that instructors have sole discretion to whether any lesson should include freeway driving. 
</li>
<li className="my-4">
DRIVING TEST FEES:
DMV behind-the-wheel test services are not included in any of our packages and must be scheduled and paid for separately.The fee applies every time the test is taken.
</li>
<li className="my-4">
REFUNDS:
All purchases are non-refundable, except when a written request for early cancellation is submitted within two weeks of the initial sign-up date.
</li>
</ul>
    </div>
  );
}
