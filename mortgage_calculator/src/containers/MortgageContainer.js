import React, {useState} from "react";
import MortgageForm from "../components/MortgageForm";
import Calculator from "../components/Calculator";

const MortgageContainer = () => {

const [maximumBudget, setMaximumBudget] = useState(0)

 const calculateMortgage = ({ yourSalary, partnerSalary, monthlyCommitments, deposit }) => {
    const salary = yourSalary + partnerSalary;
    const totalValue = ((salary - monthlyCommitments)*3) + deposit
    // console.log(maximumBudget);
    setMaximumBudget(totalValue);

   
 }


    return(
    <div>
        <p>Mortgage Container</p>
        <MortgageForm onCalculateSubmit={(data) => calculateMortgage(data)}/>
        <Calculator maximumBudget={maximumBudget} />

    </div>

    )

}







export default MortgageContainer;