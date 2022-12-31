import axios from 'axios'

const AXIOS = axios.create({
    baseURL: 'http://localhost:8090',
    timeout: 50000
  });

  var headersPost = {
    headers : {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('id_token')
    }
}

var headersGet = {
    headers : {
        'Authorization': localStorage.getItem('id_token')
    
    }
}

export default {
    getHeaders(){
       return {headers : 
        {'Authorization': localStorage.getItem('id_token')} 
       }
    },
    getHeadersPost(){
        return {headers :
            {'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('id_token')}
        }
    },
    login(login) {
        return AXIOS.post('/login', login);
    },
    saveUser(user) {
        return AXIOS.post('/user/save', user);
    },
    getUser(userId) {
        return AXIOS.get(`/user/` + userId);
    },
    getAllProperties(){
        return AXIOS.get('/property/getAllActives');
    },
    getPropertyTypesActives(){
        return AXIOS.get('/propertyType/getAllActives', this.getHeaders());
    },
    getActivesByProductTypeId(idPropertyType){
        return AXIOS.get('/propertyTypeCategory/getActivesByProductTypeId/' + idPropertyType, this.getHeaders());
    },
    getTransactionActives(){
        return AXIOS.get('/transactionType/getAllActives', this.getHeaders());
    },
    saveProperty(property){
        return AXIOS.post('/property/save', property, this.getHeadersPost());
    },
    getPropertyById(idProperty){
        return AXIOS.get('/property/getById/' + idProperty, this.getHeaders());
    },
    deleteLanguage(idLanguage){
        return AXIOS.delete('/language/delete/' + idLanguage, this.getHeadersPost());
    },
    deleteLevel(idLevel){
        return AXIOS.delete('/level/delete/' + idLevel, this.getHeadersPost());
    },
    deleteSubject(idSubject){
        return AXIOS.delete('/subject/delete/' + idSubject, this.getHeadersPost());
    },
    deleteQuestion(idQuestion){
        return AXIOS.delete('/question/delete/' + idQuestion, this.getHeadersPost());
    },
    deleteAnswer(idAnswer){
        return AXIOS.delete('/answer/delete/' + idAnswer, this.getHeadersPost());
    },
    registerLanguage(language){
        return AXIOS.post('/language/register', language, this.getHeadersPost());
    },
    getListQuestionActive(){
        return AXIOS.get('/question/listQuestionsActive', this.getHeaders());
    },
    getListAnswerActive(){
        return AXIOS.get('/answer/listAnswersActive', this.getHeaders());
    },
    getListSubjectsActive(){
        return AXIOS.get('/subject/listSubjectsActive', this.getHeaders());
    },
    getListTypeQuestionsActive(){
        return AXIOS.get('/typeQuestion/listTypeQuestionsActive', this.getHeaders());
    },
    registerSubject(subject){
        return AXIOS.post('/subject/register', subject, this.getHeadersPost());
    },
    registerQuestion(question){
        return AXIOS.post('/question/register', question, this.getHeadersPost());
    },
    registerAnswer(answer){
        return AXIOS.post('/answer/register', answer, this.getHeadersPost());
    },
    getSecured(user, password) {
        return AXIOS.get(`/secured/`,{
            auth: {
                username: user,
                password: password
            }});
    }
}