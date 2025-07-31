import { DataTypes } from "sequelize";
import sequelize  from "../config/db.js";

const Url = sequelize.define("Url",{
        longUrl:{
                type : DataTypes.STRING,
                allowNull : false
        },
        shortCode:{
                type: DataTypes.STRING,
                allowNull : false,
                unique:true
        }},
        {
                timestamps:true
        }
)
export default Url;