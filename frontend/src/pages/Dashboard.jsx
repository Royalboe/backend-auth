import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AccountinfoForm from "../components/AccountinfoForm";
import AccountinfoItem from "../components/AccountInfoItem";
import Spinner from "../components/Spinner";
import {
  getAccountinfos,
  reset,
} from "../features/accountinfo/accountinfoSlice";

const Dashboard = () => {
  const navigate = useNavigate;
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { accountinfos, isLoading, isError, message } = useSelector(
    (state) => state.accountinfos
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getAccountinfos());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1> Welcom {user && user.name} </h1>
        <p> AccountInfo Dashboard</p>
      </section>
      <AccountinfoForm />

      <section className="content">
        {accountinfos.length > 0 ? (
          <div className="accountinfos">
            {accountinfos.map((accountinfo) => (
              <AccountinfoItem key={accountinfo.id} accountinfo={accountinfo} />
            ))}
          </div>
        ) : (
          <div>
            <p> Please get an account</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Dashboard;
