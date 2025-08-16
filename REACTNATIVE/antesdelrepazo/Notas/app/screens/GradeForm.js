import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from '@rneui/base'
import { useState } from "react";
import { saveGrade, updateGrade } from "../services/GradeServices";



export const GradeForm = ({ navigation, route }) => {

    let isNew = true;
    let subjectR;
    let gradeR;

    if (route.params.notita != null) {
        isNew = false;
    }

    if (!isNew) {
        subjectR = route.params.notita.subject;
        gradeR = route.params.notita.grade.toString();
    }
    const [subject, setSubject] = useState(subjectR);
    const [grade, setGrade] = useState(gradeR);
    const [errorSubject, setErrorSubject] = useState();
    const [errorGrade, setErrorGrade] = useState();
    let hasErrors = false;




    const save = () => {
        setErrorGrade(null);
        setErrorSubject(null);
        validate();
        console.log(hasErrors)
        if (!hasErrors) {
            if (isNew) {
                saveGrade({ subject: subject, grade: grade });
                route.params.fnRefresh();
            } else {
                updateGrade({ subject: subject, grade: grade });
                route.params.fnRefresh();
            }
            navigation.goBack();
        }

    }

    const validate = () => {
        if (subject == null || subject.trim() == "" || subject == undefined) {
            setErrorSubject("Debe ingresar una materia")
            hasErrors = true;
        }
        let gradeFloat = parseFloat(grade);
        if (grade == null || isNaN(gradeFloat) || gradeFloat > 10 || gradeFloat < 0 || grade == undefined || grade.trim() == "") {
            setErrorGrade("Debe ingresar una nota entre 0-10")
            hasErrors = true
        }
    }

    return (<View style={styles.container} >

        <Input
            value={subject}
            onChangeText={setSubject}
            placeholder="Ejemplo: Matematicas"
            label="Materia"
            disabled={!isNew}
            errorMessage={errorSubject}
        />
        <Input
            value={grade}
            onChangeText={setGrade}
            placeholder="0-10"
            label="Nota"
            errorMessage={errorGrade}
            keyboardType="numeric"
        />
        <Button
            title='Guardar'
            icon={{
                name: 'save',
                type: 'entypo',
                color: 'white'
            }}
            buttonStyle={styles.saveButton}
            onPress={save}
        />
    </View>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveButton: {
        backgroundColor: 'green'
    }
});