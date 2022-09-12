import React, {useState,useEffect} from "react";
import DatePicker from "react-horizontal-datepicker";
import Header from "../components/Header";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCategThunk, addMtyTodo } from "../redux/modules/categTodoSlice.js";
import TodoList from "../components/TodoList";
import Sheet from "react-modal-sheet";

const DlyTodo = () => {

  // Redux : dispatch
  const dispatch = useDispatch();

  // Hook : wehther to show Modal sheet
  const [isOpen, setOpen] = useState(false);
 
  // Redux : useSelector
  const categories = useSelector((state) => state.categTodoSlice.categories);

  // Object : to get the date from the vertical calendar
  const selectedDateObj = {
    year: "",
    month: "",
    day: ""
  }

  const onClickedSheet = (inputs, index) => {
    setOpen(true)
    console.log("Checking inputs", inputs ,"Checking index", index)
  }

  // UseEffect : getting categories & to-do lists 
  useEffect(() => {
    dispatch(getCategThunk());
  },[]);

  // Hook : To get the title from TodoList
  const [todoTitle, setTodoTitle] = useState("");

  // Hook : getting current date from the calendar
  const [selectedDate, setSelectedDate] = useState({
    year: "",
    month: "",
    day: ""
  })

  // Function to parse string month to int month
  const parseMonth = (mm) => {
    const monthsShort = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
    };

    return monthsShort[mm]
  }
  
  // Getting date from the vertical calendar
  // const selectedDay = (val) => {
  //   const strData = val.toString()
  //   const month = strData.substring(4, 7)
  //   const day = strData.substring(8,10)
  //   const year = strData.substring(11,15)
  //   const parsedMonth = parseMonth(month)

  //   console.log("This is selectedDay function")

  //   selectedDateObj.year = year
  //   selectedDateObj.day = day
  //   selectedDateObj.month = parsedMonth

  //   console.log("This is before dispatch")
  //   const concatSelDate = `${selectedDateObj.year}-${selectedDateObj.month}-${selectedDateObj.day}`
  //   dispatch(getCategThunk(concatSelDate));
  //   console.log("This is after dispatch")
  // };
  


  // Adding a new todo
  const addTodo = ({input,index}) => {

    const mtyCateg = {
      categIndex: index,
      categReq : {
        title : "",
        dueDate : "2022-09-03"
      }
    }
    dispatch(addMtyTodo(mtyCateg));
   
  }

  return(
    <>
      <Header/>
      <div>
        <DatePicker 
          endDate={100}
          // getSelectedDay={selectedDay}
          >
        </DatePicker>
      </div>
      <Section>
        <TodoDailyStats></TodoDailyStats>
       {categories.map((input, index) => {
          return( 
           <TodoCon key={index}>
          <TodoBtn 
            onClick={()=>addTodo({input,index})}
            btnColor={input.categoryColor}
            >
            {input.categoryName}
          </TodoBtn>
          <TodoList 
            // formFields={formFields} 
            // setFormFields={setFormFields}
            // selectedDate={selectedDate}
            onClickedSheet={onClickedSheet}
            categId={input.categoryId}
            todos={input.todos}
            categIndex={index}
          >
          </TodoList>
          {/* {console.log("Checking Categ", input)} */}
        </TodoCon> 
        )})}  
      
      </Section>

      <CustomSheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <CustomSheet.Container>
          <CustomSheet.Header/>
          <CustomSheet.Content>
            <textarea></textarea>
            <button>수정</button>
            <button>삭제</button>
          </CustomSheet.Content>
        </CustomSheet.Container>

        <Sheet.Backdrop />
      </CustomSheet>
    </>
  );
};

export default DlyTodo;

const Section = styled.div`
  padding: 15px;
  position: relative;
`;

const TodoDailyStats = styled.div``;

const TodoCon = styled.div`
  margin-top: 10px;
`;

const TodoBtn = styled.button`
  background-color: ${props => props.btnColor};
  font-size: 0.9em;
  color: white;
`

const CustomSheet = styled(Sheet)`

  .react-modal-sheet-backdrop {
    /* custom styles */
    border: 3px solid #FFFFFF;
  }
  
  .react-modal-sheet-container {
    /* max-height: 300px; */
    right: 0;
    margin: 0 auto;
    max-width: 375px;
    border: 3px solid #ff0000;
  }
  .react-modal-sheet-header {
    /* custom styles */
    border: 3px solid #00FF00;
  }
  .react-modal-sheet-drag-indicator {
    /* custom styles */
    border: 3px solid #800080;
  }
  .react-modal-sheet-content {
    /* custom styles */
    border: 3px solid #ff00ff;
  }
`;




