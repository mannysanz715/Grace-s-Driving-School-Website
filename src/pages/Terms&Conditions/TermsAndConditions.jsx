import { Link } from 'react-router-dom'


let terms = ["1. Your contract starts from the day you sign up. Be sure to take your lessons within the specified amount of time. Do not let your contract expire.", "2. All packages must be paid in full and in advance of the 1st lesson otherwise discounts will not be applied.", "3. All driving appointments made are confirmed on first call no matter which family member schedules the lesson. Driving lessons are first come, first serve. If you would like an earlier lesson than your already scheduled time, please request to be placed on a cancellation list.","4. It is the customer's sole responsibility to communicate driving lesson appointments with family members.","5. If you cannot give us a 48 hour cancellation notice, you can make an arrangement to switch the lesson with another student. Please be aware that if the student does not show up for the lesson, you will be responsible for the cancellation fee. You will need to contact our office to let us know which student will be taking your lesson.","6. All questions must be directed to the office. Driver instructors will refer you back to the office unless the question is about the student's lesson performance.","7. For specific lesson performance questions, please make sure that you contact us as soon as possible after the lesson.","8. If we are late picking up the student, the student will get the full 2 hours driving from pick up time. The lesson may sometimes go over two hours depending on traffic. (No extra fee)","9. No one is allowed in our vehicles during driving lessons except for the students and instructor.","10. Students ability to learn within the six (6) hour period may vary depending on the student's abilities. The DMV requires any minors taking the driving test to complete a minimum of 50 hours of driving before they can take the test. We urge parents to practice as much as possible with their children.","11. No refunds for any used lessons.",
"12. No refunds for the drive test package.",
"13. During our busier times, our first availability could be between one or several weeks. ",
"14. We reserve the right to refuse service to anyone.",
"15. For the safety and security of our students, instructors and others, there may or may not be video surveillance at the driving school and in company vehicles.",
"16. Two hours of continual driving could be too long  for any new driver to be on the road. For this reason, if requested by the student we may take up to 10 minutes to allow the student to get some relief and clear their heads so that they can continue to learn to drive safely. "]

export default function TermsAndConditions(){
  return(
    <div className="bg-sky-400 text-white flex flex-col justify-center items-center">
    <h1 className="text-lg font-bold flex p-5  justify-center items-center">Terms & Conditions</h1>
    <Link className='text-lg flex-col justify-center items-center w-24 bg-yellow-400 text-white rounded p-3 mb-10 font-bold text-center' to='/' >Go Back Home</Link>
    <p className="px-10 text-lg font-bold">
      This contract has an expiration date of 12 months after sign up.
    </p>  
    <p className="px-10 text-md font-semibold">
      Anyone 18 years old or older trying to take a DMV test is not required to do Drivers Education or Drivers training.
    </p>  
<ul className="p-10 flex-col font-semibold gap-10">
    {terms.map((term, idx) =>
        <li key={idx} className="my-4">{term}</li>
        )}
  </ul>

  <ul className="px-5 font-semibold">
    <li className="my-4">You will be charged a $50.00 fee</li>
    <li className="my-4">1. for each remaining lesson(s) that is not completed within contractual time.</li>
    <li className="my-4">2. if you do not have your permit at the time of pickup. (class must be rescheduled) It is illegal to drive without it.</li>
    <li className="my-4">3. if you do not give the school a 48-hour prior notice to change, cancel, or reschedule your appointment. If you are ill, a doctors note is required to waive the fee.</li>
  </ul>

<ul className="font-semibold p-10">
<li className="font-bold my-4">Do not let your contract expire. </li>
*YOU WILL BE CHARGED $25.00 fee For any duplicate certificate:
<li className="my-4 ml-5">
  1. DL 400B: Certificate of Completion of Drivers Education.
</li>
<li className="my-4 ml-5">
  2. DL 400C Certificate of Completion of Non-Classroom Drivers Education.
</li>

<li className="my-4">
DRIVER TRAINING FEES:
 I understand and agree that if I do not pay the discounted package fee in advance, I must pay for each driving lesson at full price. I further understand and agree that any and all purchases are non-refundable, except upon written request for early cancellation submitted no later than two weeks after signup. I am aware that I must pay a penalty of $50.00 for late cancellation.
</li>
 <li className="my-4">
LEARNERS PERMIT:
I am aware that it is illegal to take driving lessons without the proper learners permit issued by the Department of Motor Vehicles. Therefore, I agree that if I fail to bring my learners permit with me to any driving lesson, that lesson will be rescheduled and I will be charged a rescheduling fee of $50.00.
</li>
<li className="my-4">
48 HOUR NOTICE:
 I understand that I must give Graces Driving School 48 hour notice  to reschedule or cancel any driving lesson, and that I must pay a fee of $50.00 for failure to do so. I also understand and agree that all rescheduling and cancellations must be arranged with the administrative office and may not be coordinated with the instructors.
 </li>
 <li className="my-4">
SCHEDULE EXCHANGES:
I am aware that Graces Driving School not only allows, but encourages students to exchange scheduled driving lessons with other students. When students are unable to attend a scheduled lesson, for whatever reason, this policy helps students and parents avoid penalties for late cancellation or late rescheduling. (Must be from the same area)
</li>
<li className="my-4">
FREEWAY DRIVING:
The Department of Motor Vehicles does not require that Driver Training courses include driving on the freeway. We at Graces Driving School adhere to a strict policy of safety first. Therefore, I understand and agree that instructors have sole discretion to whether any lesson should include freeway driving. 
</li>
<li className="my-4">
DRIVING TEST FEES:
I understand and agree that there is an additional fee for each driving test that I take and that there are no refunds . I further understand and agree that it is my responsibility to present proof of (certificates), that I have had at least six hours of Drivers Training to the Department of Motor Vehicles.</li>
</ul>
    </div>
  );
}