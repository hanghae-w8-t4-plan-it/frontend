import React from "react";
import { Route, Routes } from "react-router-dom";
import LogoPage from "../pages/LogoPage";
import LogoPageFix from "../pages/LogoPageFix";
import LogInPage from "../pages/LogInPage";
import SignUp from "../pages/SignUp";
import Tutorial from "../pages/Tutorial";
import DlyTodo from "../pages/DlyTodo";
import Kakao from "./Kakao";
import Search from "../pages/Search";
import Follow from "../pages/Follow";
import Category from "../pages/Category";
import CategoryDetail from "../pages/CategoryDetail";
import WklyTodo from "../pages/WklyTodo";
import CreatePlanet from "../pages/CreatePlanet";
import TimerPage from "../pages/TimerPage";
import MyPage from "../pages/MyPage";
import NickName from "../components/mypage/NickName";
import Password from "../components/mypage/Password";
import NotFoundPage from "../pages/NotFoundPage";
import MaintPage from "../pages/MaintPage";
import StatisticDay from "../pages/StatisticDay";
import StatisticWeek from "../pages/StatisticWeek";
import StatisticMonth from "../pages/StatisticMonth";
import StatisticYear from "../pages/StatisticYear";
import Report from "../pages/Report";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LogoPage />} />
      <Route path="/notfound" element={<NotFoundPage />} />
      <Route path="/maintPage" element={<MaintPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/dlytodo" element={<DlyTodo />} />
      <Route path="/wklytodo" element={<WklyTodo />} />
      <Route path="/login/kakao" element={<Kakao />} />
      {/* <Route path="/search" element={<Search />} /> */}
      {/* <Route path="/follow" element={<Follow />} /> */}
      <Route path="/createplanet" element={<CreatePlanet />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/nickname" element={<NickName />} />
      <Route path="/password" element={<Password />} />
      <Route path="/category" element={<Category />} />
      <Route path="/categorydetail/:id" element={<CategoryDetail />} />
      <Route path="/timer" element={<TimerPage />} />
      <Route path="/statisticday" element={<StatisticDay />} />
      <Route path="/statisticweek" element={<StatisticWeek />} />
      <Route path="/statisticmonth" element={<StatisticMonth />} />
      <Route path="/statisticyear" element={<StatisticYear />} />
      <Route path="/report" element={<Report />} />
      <Route path="*" element={<LogoPageFix />} />
    </Routes>
  );
};

export default Router;
