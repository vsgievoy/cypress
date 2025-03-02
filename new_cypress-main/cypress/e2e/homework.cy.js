describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio'); // зашел на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввод верного логина
         cy.get('#pass').type('iLoveqastudio1'); // ввод верного пароля
         cy.get('#loginButton').click(); // нажать на кнопку Войти
         cy.get('#messageHeader').should('be.visible'); // проверка что надпись есть
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка надписи
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка что есть Крестик
     })
     
    it('Проверка смены пароля', function () {
        cy.visit('https://login.qa.studio'); // зашел на сайт
        cy.get('#forgotEmailButton').click(); // нажать на кнопку забыли пароль
        cy.get('#mailForgot').type('test123@test.ru'); // ввод почты
        cy.get('#restoreEmailButton').click(); // нажать отправить код
        cy.get('#messageHeader').should('be.visible'); // проверка что надпись есть
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка надписи
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка что есть Крестик
         })
     
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru'); // ввод верного логина
        cy.get('#pass').type('test123'); // ввод неверного пароля
        cy.get('#loginButton').click(); // нажать на кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // проверка что надпись есть
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка надписи
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка что есть Крестик
        })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // зашел на сайт
        cy.get('#mail').type('test123@test.ru'); // ввод неверного логина
        cy.get('#pass').type('iLoveqastudio1'); // ввод верного пароля
        cy.get('#loginButton').click(); // нажать на кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // проверка что надпись есть
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка надписи
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка что есть К
        })    

    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio'); // зашел на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввод логина без @
        cy.get('#pass').type('iLoveqastudio1'); // ввод верного пароля
        cy.get('#loginButton').click(); // нажать на кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // проверка что надпись есть
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка надписи
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка что есть К
        })

    it('Проверка строчных букв в логине', function () {
        cy.visit('https://login.qa.studio'); // зашел на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввод логина
        cy.get('#pass').type('iLoveqastudio1'); // ввод верного пароля
        cy.get('#loginButton').click(); // нажать на кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // проверка что надпись есть
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка надписи
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка что есть Крестик
        })
 }) 
