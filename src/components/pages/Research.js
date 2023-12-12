import React, { useState } from 'react'
import '../../styles/researchSupport.css'
import figImage from '../../images/FIG-New.png';
import mgsImage from '../../images/MGS.gif';
import startupImage from '../../images/Startup expo.png'
import smileImage from '../../images/SMILE.png'
import resImage from '../../images/Research project guideline.png'
const Research = () => {
    const [tab, setTab] = useState(0);
    return (

        <div className='bg-cover bg-center' id='download'>
            <div className="btn-group p-2" role="group" aria-label="Basic example">
                <button type="button" onClick={() => setTab(0)} className={`btn btn-secondary ${tab == 0 ? "bg-slate-500" : ""}`}>Research Support</button>
                <button type="button" onClick={() => setTab(1)} className={`btn btn-secondary ${tab == 1 ? "bg-slate-500" : ""}`}>Research Facility</button>
                <button type="button" onClick={() => setTab(2)} className={`btn btn-secondary ${tab == 2 ? "bg-slate-500" : ""}`}>Research Areas</button>

            </div>
            {(tab == 0) && <>
                <p className='text-center text-white text-3xl font-serif font-bold p-2'>Research Support</p>
                <div className='text-white p-2 px-3'>
                    <p className='text-white md:text-3xl sm:text-xl font-semibold pb-2'> FACULTY INITIATION GRANT (FIG)</p>
                    <img src={figImage} className='h-30 w-30 rounded-sm' />
                    <p className='sm:text-xl md:text-2xl py-2 font-bold'>The Faculty Initiation Grant (FIG) scheme is to encourage and support newly joined faculty members to establish preliminary R&D setup that will help augmenting research output of a faculty member. The Faculty Initiation Grant (FIG) limit has been enhanced from existing amount of Rs. 10 lacs to a maximum of Rs. 20 lacs. The procedure and guidelines for submitting proposal to avail FIG and to execute R&D work under this scheme are mentioned below:</p>
                    <p className='sm:text-xl md:text-2xl'>1.An initiation grant upto maximum amount of Rs. 20.00 lacs may be sanctioned to new faculty members for developing his/her research infrastructure for a period of two years. The new faculty members must apply for this grant within one year from the date of his/her joining the Institute.</p>
                    <p className='sm:text-xl md:text-2xl'>2.In addition to this Rs. 20.00 lacs which is based on a proposal, an amount of Rs. 2.00 lacs shall be provided to the new faculty on the first day of joining, without need for a proposal. This 2.00 lacs shall be in a Project Account in SRIC Office and new faculty can use it for travel and buying equipment/laptop/ printer/ furniture/ consumables/nonconsumables/ software which can be procured within Rs. 2.00 lacs.</p>
                    <p className="sm:text-xl md:text-2xl">3.The applicant faculty member shall submit a research proposal on the prescribed format to the Office of the Dean SRIC (including phase-wise budget for two years) through the respective Head of the Department / Centre.</p>
                    <p className="sm:text-xl md:text-2xl">4.A list of three external experts shall be proposed by the faculty member for external peer review and proposal shall be sent to all of them for review. Comments of the external experts shall be presented to the Expert Committee.</p>
                    <p className="sm:text-xl md:text-2xl">5.The proposal will be evaluated by the following Expert Committee consisting of :</p>
                    <div class="w-full overflow-hidden rounded-lg shadow-md">
                        <table class="w-full">
                            <thead>
                                <tr className='bg-white'>
                                    <th class="py-2 px-4 border-b text-black  border-gray-300">Sr No</th>
                                    <th class="py-2 px-4 border-b text-black border-gray-300">Commitee Members</th>
                                    <th class="py-2 px-4 border-b text-black border-gray-300">Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-2 px-4 border-b border-gray-300">1.</td>
                                    <td class="py-2 px-4 border-b border-gray-300">DEAN (SRIC)</td>
                                    <td class="py-2 px-4 border-b border-gray-300">Chairman</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b border-gray-300">2.</td>
                                    <td class="py-2 px-4 border-b border-gray-300">One Expert from outside the Department/Center but within the institute</td>
                                    <td class="py-2 px-4 border-b border-gray-300">Member</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b border-gray-300">3.</td>
                                    <td class="py-2 px-4 border-b border-gray-300">Head of Concerned Department/Center</td>
                                    <td class="py-2 px-4 border-b border-gray-300">Member</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="md:text-2xl sm:text-xl">6.The grant will be utilized for the purpose of laboratory equipment, consumables & software and for technical visits only, and the release of grant will be on yearly basis</p>
                    <p className="md:text-2xl sm:text-xl">7.Yearly progress report will be submitted by the concerned faculty member to the office of Dean (SRIC) through his/her respective Head of the Department/Centre before the release of grant for the next year.</p>
                    <p className="md:text-2xl sm:text-xl">This scheme shall be applicable to new faculty joining after 1 st August, 2017.</p>
                    <p className='md:text-xl sm:text-lg font-bold' >Details About Faculty Initiation Grant <a href='https://www.iitr.ac.in/sric/supportfromsric/FIG-Form.doc' className='text-red-500'> Click here to download</a> </p>

                </div>
                <div className='text-white p-2 px-3'>
                    <p className='text-white md:text-3xl  sm:text-xl font-semibold pb-2'> SUPPORT FOR MAJOR INTERDISCIPLINARY LABORATORY EQUIPMENT (SMILE) SCHEME-2022</p>
                    <img src={smileImage} className='h-30 w-30 rounded-sm' id='smile' />
                    <p className='sm:text-xl md:text-2xl py-2 font-bold'>Under the SMILE-2022 scheme the Institute will provide support for procurement of major equipment in the areas of research where a long-felt need exists or for supporting new thrust areas of research. Only major facilities costing above Rs. 25 Lacs (including AMC for three years, warranty and all accessories) will be considered for support under this scheme. The proposals will be shortlisted for presentation according to the following guidelines:</p>
                    <p className='sm:text-xl md:text-2xl'> 1. Proposals for purchase of major research equipment are invited from a group of faculty members drawn from across different Departments/Centers of the Institute with a coherent research plan of action for effective utilization of the facility to be created.</p>
                    <p className="sm:text-xl md:text-2xl">2. Submission of the Proposal: The proposals (according to the prescribed proforma) are to be submitted to the SRIC office taking into account the scope of the Scheme.</p>
                    <p className="sm:text-xl md:text-2xl">3. The proposals should be duly forwarded by the concerned Head(s) of the Departments/Centers.</p>
                    <p className="sm:text-xl md:text-2xl">4. It is essential to involve at least two departments/centres to maintain the interdisciplinary nature of the scheme and at least three users for the equipment, who should be clearly identified in the proposal. The Head(s) of the other Department(s) / Center(s) associated with the proposal will also be required to recommend the proposal along with the Head of the lead Department/Center.</p>
                    <p className="sm:text-xl md:text-2xl">5. The lead Department/Center is expected to contribute significantly to the infrastructural support required, such as space and manpower, for the equipment to be purchased. The other associated Department(s) /Center(s) shall contribute in terms of running and maintenance costs of the equipment, which will be decided by a user committee duly approved by the Dean SRIC.</p>
                    <p className="sm:text-xl md:text-2xl">6. Fair access shall be ensured to all the users who wish to use the facility.</p>
                    <p className="sm:text-xl md:text-2xl">7. Proposals for upgrading obsolete research equipment or any obsolete subsystem of any existing equipment may also be considered under this initiative.</p>
                    <p className="sm:text-xl md:text-2xl">8. Matching grants/partial grants from external agencies (such as UAY / IMPRINT/SAP schemes etc.) are desirable. The necessary documents for such matching grants should be provided by the proposer while submitting the proposal.</p>
                    <p className="sm:text-xl md:text-2xl">9. The proposal must include a plan for maintenance of the equipment beyond the warranty period. It is to be mentioned in the proposal whether trained manpower is required for the long term maintenance and the plan to meet the requirement may be stated in the proposal.</p>
                    <p className="sm:text-xl md:text-2xl">10. A proposal shall have only ONE major research equipment for purchase for which the budgetary quotations with a validity of 3 months must be included in the proposal.</p>
                    <p className="sm:text-xl md:text-2xl">11. Requirements of site preparation for installation of the equipment such as flooring, ceiling, electric supply, air conditioning, compressed air, water and drainage should be clearly indicated in the proposal.</p>
                    <p className="sm:text-xl md:text-2xl">12. Proposals for purchase of stand-alone application software, servers, workstations, PCs shall not be considered. </p>
                    <p className="sm:text-xl md:text-2xl">13. An outline of the recent research activities of the user group should be included in the proposal.</p>
                    <p className="sm:text-xl md:text-2xl">14. A note should also be given on how the purchase of the new equipment is likely to enhance the impact of research activities and outcomes and submission of more sponsored project proposals.</p>
                    <p className="sm:text-xl md:text-2xl">15. There is no restriction on the number of proposals from a Department/Center. All proposals received by the due date shall be reviewed by a committee of nominated members and chaired by the Dean SRIC. Its recommendations will be forwarded to the Director, and the Dean SRIC will make the final announcement as per the approval of the Director.</p>
                    <p className="sm:text-xl md:text-2xl">16. One faculty member can be associated with a maximum of TWO proposals only including his/her role as both PI and Co-PI.</p>
                    <p className="sm:text-xl md:text-2xl">17. The faculty members who have received support as the Lead proposers in 2017 or 2018 SMILE scheme will be eligible for support from SMILE 2022 only if they have been able to secure an externally funded project, as PI, after that support. They can, however, be a member of the interdisciplinary team for a new proposal.</p>
                    <p className='md:text-xl sm:text-lg font-bold' >Soft copies of the proposals should be submitted latest by 10 May 2022 <a href='https://www.iitr.ac.in/sric/Download/SMILE_Guidelines.pdf' className='text-red-500'> Click here to download</a> </p>

                </div>
                <div className="text-white p-2 px-3"
                >
                    <p className='text-white md:text-3xl  sm:text-xl font-semibold pb-2'>MATCHING GRANT SCHEME</p>
                    <img src={mgsImage} className='h-30 w-30 rounded-sm' id='smile' />
                    <p className='sm:text-xl md:text-2xl py-2 font-bold'>The Matching Grant scheme has been launched to encourage submission of more sponsored research proposals from the faculty members of the Institute and also to address some of the issues that arise when a sponsored research proposal is approved. A group of faculty members can apply for pooling of their Matching Grants to procure a high cost equipment/facility. A Matching Grant can also be sought as a commitment letter from the institute at the time of submission/negotiation of a sponsored research proposal. For sanctioned sponsored projects, matching grant upto 50% of the amount sanctioned by funding agency for equipment or Rs. 20.00 lacs, whichever is less, is sanctioned on due evaluation by an expert committee. Matching Grants summing upto Rs. 20.00 lakhs can also be availed in three years for multiple projects by a faculty member.</p>
                    <p className="sm:text-xl md:text-2xl py-2 font-bold">The Matching Grant from the Institute is to:</p>
                    <p className='sm:text-xl md:text-2xl'>1. Encourage submission of more sponsored reserach proposals from the institute.</p>
                    <p className="sm:text-xl md:text-2xl">2. Address some of the issues that arise when a sponsored research proposal is approved.</p>
                    <p className="sm:text-xl md:text-2xl py-2 font-bold">The Matching Grant from the Institute is to:</p>
                    <p className="sm:text-xl md:text-2xl">1.As a commitment letter from the institute at the time of submission/negotiation of a sponsored research proposal. In some cases, this may increase the chances of success of the proposals.</p>
                    <p className="sm:text-xl md:text-2xl">2. When only a partial support for proposals has been approved.</p>
                    <p className="sm:text-xl md:text-2xl">3.With some additional funding from the institute, better equipment or facility can be procured or set up, than what will be possible with the sponsored funds.</p>
                    <p className='md:text-xl sm:text-lg font-bold' >Details About Matching Grant Scheme  <a href='https://www.iitr.ac.in/sric/supportfromsric/Matching_Grant_Scheme.pdf' className='text-red-500'> Click here to download</a> </p>

                </div>
                <div className="text-white p-2 px-3">
                    <p className='text-white md:text-3xl  sm:text-xl font-semibold pb-2'>TECHNOLOGY READINESS LEVEL BOOSTER (TRLB) </p>
                    <p className="sm:text-xl md:text-2xl"><span className='font-bold'>Background: </span>Commercialization of technologies is needed for enhancing the impact of our research in the corporate world. Just like we have made a significant improvement in the filing of patents, we now need to also focus on the monetization of these technologies. For this to happen, we need to enhance the technology readiness level (TRL) of the technologies developed in the Institute. </p>
                    <p className="sm:text-xl md:text-2xl"><span className='font-bold'>Technology Readiness Level: </span>TRL is an indicator to assess the maturity level of a technology. In practice, TRLs are measured from 1 to 9. A survey of different technologies protected by the IPR Cell of the Institute has found that 60% of the technologies are at TRL 4, 5 and 6 and less than 4% technologies are at TRL9. Therefore, there is an urgent need to provide support to the innovators of technologies which are levels 4, 5 and 6 so that their TRL can be taken to 7 and 8 when it will become possible to commercialize them.</p>
                </div>

                <div className="text-white p-2 px-3">
                    <p className='text-white md:text-3xl  sm:text-xl font-semibold pb-2'>FACULTY LED STARTUP</p>
                    <img src={startupImage} className='h-30 w-30 rounded-sm' id='smile' />

                </div>
            </>}
            {(tab == 1) && <>
                <p className='text-center text-white text-3xl font-serif font-bold p-2 pb-4'>Research Facility</p>
                <p className="text-xl md:text-3xl  px-2 text-center text-white hover:text-grey-400 md:font-semibold py-2"><a href='https://www.istem.gov.in/'>1. I-STEM </a></p>
                <p className="text-xl md:text-3xl  px-2 text-center text-white hover:text-grey-400 md:font-semibold py-2"><a href='https://iicbooking.iitr.ac.in/'>2. IIC </a></p>
                <p className="text-xl md:text-3xl  px-2 text-center text-white hover:text-grey-400 md:font-semibold py-2"><a href='https://iicbooking.iitr.ac.in/'>3. Tinkering Lab </a></p>

                <img src={resImage} className='py-2 px-5' id='dem' />
            </>}
            {(tab == 2) && <>
                <p className='text-center text-white text-3xl font-serif font-bold p-2 pb-4 dem'>Research Areas</p>

            </>

            }


        </div>
    )
}

export default Research
