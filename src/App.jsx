import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Trainings from './components/Trainings/Trainings'
import Fitness from "./components/Trainings/Fitness/Fitness";
import Aerobics from "./components/Trainings/Aerobics/Aerobics";
import Cardio from "./components/Trainings/Cardio/Cardio";
import FitnessRoutines from "./components/Trainings/Fitness/FitnessRoutines/FitnessRoutines";
import CardioRoutines from "./components/Trainings/Cardio/CardioRoutines/CardioRoutines";
import AerobicsRoutines from "./components/Trainings/Aerobics/AerobicsRoutines/AerobicsRoutines";
import Chest from "./components/Trainings/Fitness/FitnessRoutines/muscles/Chest/Chest";
import Shoulders from "./components/Trainings/Fitness/FitnessRoutines/muscles/Shoulders/Shoulders";
import Legs from "./components/Trainings/Fitness/FitnessRoutines/muscles/Legs/Legs";
import Biceps from "./components/Trainings/Fitness/FitnessRoutines/muscles/Biceps/Biceps";
import Triceps from "./components/Trainings/Fitness/FitnessRoutines/muscles/Triceps/Triceps";
import ChestSetsAndReps from "./components/Trainings/Fitness/FitnessRoutines/muscles/Chest/ChestSetsAndReps/ChestSetsAndReps";
import Layout from "./Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Help from "./components/Help/Help";
import ExerciseModal from "./components/Modal/ExerciseModal";
import BicepsSetsAndReps from "./components/Trainings/Fitness/FitnessRoutines/muscles/Biceps/BicepsSetsAndReps/BicepsSetsAndReps"
import StartTraining from "./components/Trainings/Fitness/Start/StartTraining";

export const RoutineContext = createContext();

function App() {
  const [routineName, setRoutineName]= useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

  const Values = createContext(routineName);

  return (
    <>
<RoutineContext.Provider value={{ routineName, setRoutineName, modalIsOpen, openModal, closeModal }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trainings />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/fitnessroutines" element={<FitnessRoutines />} />
          <Route path="/chest" element={<Chest />} />
          <Route path='/chest-step3' element={<ChestSetsAndReps />} />
          <Route path="/shoulders" element={<Shoulders />} />
          <Route path='/biceps-step3' element={<BicepsSetsAndReps />} />
          <Route path="/legs" element={<Legs />} />
          <Route path="/biceps" element={<Biceps />} />
          <Route path="/triceps" element={<Triceps />} />
          <Route path="/aerobics" element={<Aerobics />} />
          <Route path="/aerobicsroutines" element={<AerobicsRoutines />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/cardioroutines" element={<CardioRoutines />} />
          <Route path="/help" element={<Help />} />
          <Route path="/modal" element={<ExerciseModal />} />
          <Route path="/fitnessstart" element={<StartTraining />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </RoutineContext.Provider>

    </>
  )
}

export default App
