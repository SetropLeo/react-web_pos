import React from 'react';
import { connect } from 'react-redux';

import { Images } from '../../Images';
import { SideMenuItem } from './SideMenuItem';
import './SideBar.css';

import * as menuActions from '../../store/actions/sideBarActions';
import { bindActionCreators } from 'redux';

const SideBar: React.FC = ({ foodType, foodOptions, filterFood }: any) => (
  <div className="sidebar-container">
    <div className="business-subcontainer">
      <img src={Images.pineDine} alt="restaurant-logo" />
      <p>Pine & Dine</p>
    </div>
    {foodOptions.map((item: SideMenuItem) => {
      return (
        <div key={item.title} className={`category-subcontainer ${foodType === item.title ? 'active' : ''}`} onClick={() => filterFood(item.title)}>
          <img src={item.icon} alt="restaurant-logo" />
          <p>{item.title}</p>
        </div>
      )
    })}
  </div>
);


const mapStateToProps = (state: any) => ({ foodType: state.sideBarOption.foodType, foodOptions: state.sideBarOption.foodOptions });
const mapDispatchToProps = (dispatch: any) => bindActionCreators(menuActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
