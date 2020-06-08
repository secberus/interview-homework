import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InitializeTasks } from "../../store/actions/tasks";

const Home = () => {
  const dispatch = useDispatch();
  const Initialized = useSelector((state) => state.tasks.tasksInitialized);
  useEffect(() => {
    dispatch(InitializeTasks());
  }, [dispatch]);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Home</h2>
    </>
  );
};

export default Home;
