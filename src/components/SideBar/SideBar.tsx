import React from 'react';
import { connect } from 'react-redux';

import { Images } from '../../Images';
import { MenuItem } from './MenuItem';
import './SideBar.css';

import * as menuActions from '../../store/actions/menuOption';
import { bindActionCreators } from 'redux';

const SideBar: React.FC = ({ activeFood, foodOptions, setFoodType }: any) => (
  <div style={{ backgroundColor: '#E9ECEF' }}>
    <div className="sidebar-main-container">
      <div className="business-subcontainer">
        <img src={Images.pineDine} alt="restaurant-logo" />
        <p>Pine & Dine</p>
      </div>
      {foodOptions.map((item: MenuItem) => {
        return (
          <div key={item.title} className={`category-subcontainer ${activeFood === item.title ? 'active' : ''}`} onClick={() => setFoodType(item.title)}>
            <img src={item.icon} alt="restaurant-logo" />
            <p>{item.title}</p>
          </div>
        )
      })}
    </div>
  </div>
);

const mapStateToProps = (state: any) => ({ activeFood: state.menuOption.activeFood, foodOptions: state.menuOption.foodOptions });
const mapDispatchToProps = (dispatch: any) => bindActionCreators(menuActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
