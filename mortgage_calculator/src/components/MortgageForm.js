import React, {useState} from "react";
import Calculator from "./Calculator";

    const MortgageForm = ({onCalculateSubmit}) => {

        // states
        const [yourSalary, setYourSalary] = useState(0);
        const [partnerSalary, setPartnerSalary] = useState(0);
        const [deposit, setDeposit] = useState(0);
        const [monthlyCommitments, setMonthlyCommitments] = useState(0);

        // handlechange functions
        const handleYourSalaryChange = (event) => {
            setYourSalary(parseInt(event.target.value));
        }

        const handlePartnerSalaryChange = (event) => {
            setPartnerSalary(parseInt(event.target.value));
        }

        const handleDepositChange = (event) => {
            setDeposit(parseInt(event.target.value));
        }

        const handleMonthlyCommitmentsChange = (event) => {
            setMonthlyCommitments(parseInt(event.target.value));
        }

        const handleFormSubmit = (event) => {
            event.preventDefault();

            onCalculateSubmit({
                yourSalary: yourSalary,
                partnerSalary: partnerSalary,
                monthlyCommitments: monthlyCommitments,
                deposit: deposit
            })
        }


        
        return(
            <div>
                <p>I am MortgageForm</p>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label for="your-salary">Your salary</label>
                        <input type="number" id="your-salary" onChange={handleYourSalaryChange}/>
                    </div>
                    <div>
                        <label for="partner-salary">Your partner's salary</label>
                        <input type="number" id="partner-salary" onChange={handlePartnerSalaryChange}/>
                    </div>
                    <div>
                        <label for="deposit">Deposit amount</label>
                        <input type="number" id="deposit" onChange={handleDepositChange}/>
                    </div>
                    <div>
                        <label for="commitments">Monthly commitments</label>
                        <input type="number" id="commitments" onChange={handleMonthlyCommitmentsChange}/>
                    </div>
                    <div>
                        <input type="submit" value="Calculate"/>
                    </div>

                </form>


                
            </div>

        )

    }








export default MortgageForm;