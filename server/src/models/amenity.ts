import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql'

const Amenity = sequelize.define('Amenity', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER, // hoặc DataTypes.BIGINT nếu bạn cần số nguyên lớn hơn
    primaryKey: true,
    autoIncrement: true,  
  },
  title: { type: DataTypes.STRING, allowNull: false },
  status: { 
    type: DataTypes.INTEGER , 
    allowNull: false ,
    defaultValue: 1,
    get() {
      const rawValue = this.getDataValue('status');
      return rawValue === 1 ? 'ACTIVE' : 'INACTIVE';
    },
    set(value) {
      let numericValue = value === 'ACTIVE' ? 1 : 0
      this.setDataValue('status', numericValue);
    }
  },

}, {

});


export default Amenity