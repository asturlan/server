import {check} from 'express-validator';
function validate(method){
    switch(method){
        case 'CreateAnnual' : {
            return [
                check('title').not().isEmpty().withMessage("Polje 'Naziv' ne smije biti prazno"),
                check('id_year').isNumeric().withMessage("Polje 'Akademska godina' ne smije biti prazno"),
                check('timetable_type').isIn(['Ljeto','Zima']).withMessage("Polje 'Tip rasporeda' ne smije biti prazno")
            ]
        }
        case 'CreateUser' : {}
        case 'UserLogIn' : {}
    }
};
export default validate;