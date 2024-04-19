import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: { type: DataTypes.STRING, allowNull: false },
  surName: { type: DataTypes.STRING , allowNull: false },
  city: { type: DataTypes.STRING , allowNull: false },
  district: { type: DataTypes.STRING , allowNull: false },
  ward: { type: DataTypes.STRING , allowNull: false },
  address: { type: DataTypes.STRING , allowNull: false },
  id_card: { type: DataTypes.STRING , allowNull: false },
  phone: { type: DataTypes.STRING , allowNull: false },
  email: { type: DataTypes.STRING , allowNull: false },
  birthDay: { type: DataTypes.DATE , allowNull: false },
  gender: { type: DataTypes.INTEGER , allowNull: false },
  position: { type: DataTypes.INTEGER , allowNull: false },
  salary: { type: DataTypes.STRING , allowNull: false },
  image: { type: DataTypes.STRING , allowNull: false },
}, {
  // Other model options go here
});

export default User