const { toHaveAccessibleDescription } = require("@testing-library/jest-dom/dist/matchers");

class police_database {
    constructor(department_id, department_name, operator_id, password, district_name, branch_name){
        this.id = department_id;
        this.department_name = department_name;
        this.operator_id = operator_id;
        this.password = password;
        this.district_name = district_name;
        this.branch_name = branch_name;

    }
}

module.exports = police_database;