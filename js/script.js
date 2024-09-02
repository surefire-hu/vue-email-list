const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            message: 'Email List',
            emails: []
        };
    },
    // ciclo per chiamare l'API 10 volte
    created() { 
        const emailPromises = [];
        for (let i = 0; i < 10; i++) {
            emailPromises.push(
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => resp.data.response)
            )    
        }   
        // ciclo per creare le email
        Promise.all(emailPromises)
        .then((emails) => {
            this.emails = emails;
        })
    }
}).mount('#app');
