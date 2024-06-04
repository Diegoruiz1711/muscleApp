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
import Back from "./components/Trainings/Fitness/FitnessRoutines/muscles/Back/Back";
import ChestSetsAndReps from "./components/Trainings/Fitness/FitnessRoutines/muscles/Chest/ChestSetsAndReps/ChestSetsAndReps";
import Layout from "./Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trainings />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/fitnessroutines" element={<FitnessRoutines />} />
          <Route path="/chest" element={<Chest />} />
          <Route path='/chest-step3' element={<ChestSetsAndReps />} />
          <Route path="/shoulders" element={<Shoulders />} />
          <Route path="/back" element={<Back />} />
          <Route path="/legs" element={<Legs />} />
          <Route path="/biceps" element={<Biceps />} />
          <Route path="/triceps" element={<Triceps />} />
          <Route path="/aerobics" element={<Aerobics />} />
          <Route path="/aerobicsroutines" element={<AerobicsRoutines />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/cardioroutines" element={<CardioRoutines />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>


    </>
  )
}

export default App
