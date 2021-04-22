import React, {useState} from "react";
import Calculator from "./Calculator";

    const MortgageForm = ({onCalculateSubmit}) => {

        // states
        const [yourSalary, setYourSalary] = useState("");
        const [partnerSalary, setPartnerSalary] = useState("");
        const [deposit, setDeposit] = useState("");
        const [monthlyCommitments, setMonthlyCommitments] = useState("");

        // handlechange functions
        const handleYourSalaryChange = (event) => {
            setYourSalary(event.target.value);
        }

        const handlePartnerSalaryChange = (event) => {
            setPartnerSalary(event.target.value);
        }

        const handleDespoitChange = (event) => {
            setDeposit(event.target.value);
        }

        const handleMonthlyCommitmentsChange = (event) => {
            setMonthlyCommitments(event.target.value);
        }

        const handleFormSubmit = (event) => {
            event.preventDefault();
        }




        
        return(
            <div>
                <p>I am MortgageForm</p>
                <form>
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
                        <input type="number" id="deposit" onChange={handleDespoitChange}/>
                    </div>
                    <div>
                        <label for="commitments">Monthly commitments</label>
                        <input type="number" id="commitments" onChange={handleMonthlyCommitmentsChange}/>
                    </div>
                    <div>
                        <input type="submit" value="Calculate"/>
                    </div>

                </form>


                <Calculator />
            </div>

        )

    }








export default MortgageForm;