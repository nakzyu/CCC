import React, { useEffect, useState, Fragment, useLayoutEffect } from "react";
import Header from "./Header";
import Table from "./dashboard/Table";
import { getLatest } from "../actions/currencyAction";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const latest = useSelector(state => state.latest);
  const dispatch = useDispatch();

  useEffect(() => {
    getLatest();
  }, []);

  return (
    <Fragment>
      <Header />
      {<Table latest={latest} />}
    </Fragment>
  );

  //   return (
  //     <div className="App">
  //       <Header />
  //       {log != null &&
  //         Object.keys(log.log.rates).map(content => (
  //           <div>
  //             {content}
  //             {log.log.rates[content]}
  //             {console.log(log)}
  //           </div>
  //         ))}
  //     </div>
  //   );
  // }
}
export default App;
