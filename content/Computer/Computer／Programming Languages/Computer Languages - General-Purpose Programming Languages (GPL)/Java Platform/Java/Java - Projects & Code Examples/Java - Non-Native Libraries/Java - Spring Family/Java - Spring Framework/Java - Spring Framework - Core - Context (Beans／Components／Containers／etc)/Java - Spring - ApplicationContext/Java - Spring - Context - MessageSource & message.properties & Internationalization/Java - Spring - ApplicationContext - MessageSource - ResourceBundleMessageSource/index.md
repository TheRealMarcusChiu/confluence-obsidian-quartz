---
title: "Java - Spring - ApplicationContext - MessageSource - ResourceBundleMessageSource"
created: 2021-07-04T23:21:50.428-05:00
modified: 2026-05-17T13:37:34.070-05:00
parent: "[[Java - Spring - Context - MessageSource & message.properties & Internationalization]]"
children: []
---
###### ResourceBundleMessageSource
- is the most common implementation of <code><font style="color: rgb(51,102,255);">MessageSource</font></code>
- it relies on the underlying JDK's <code>[ResourceBundle](https://docs.oracle.com/javase/8/docs/api/java/util/ResourceBundle.html?is-external=true)</code> implementation
- it also uses the JDK's standard message parsing provided by <code>[MessageFormat](https://docs.oracle.com/javase/8/docs/api/java/text/MessageFormat.html?is-external=true)</code>

# Code Example

Now, let's see how can we use the <code><font style="color: rgb(51,102,255);">ResourceBundleMessageSource</font></code> to read the messages from a properties file.
- First, we'll create the <code><font style="color: rgb(128,128,128);">messages.properties</font></code> file on the classpath:
    ```
    account.name=TestAccount
    ```
- Second, we'll add a bean definition in our <code><font style="color: rgb(51,102,255);">AccountConfig</font></code> class:
    ```
    @Bean
    public MessageSource messageSource() {
    	ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
    	messageSource.setBasename("config/messages");
    	return messageSource;
    }
    ```
- Third, we'll inject the MessageSource in the AccountService
    ```
    @Autowired
    private MessageSource messageSource;
    ```
- Finally, we can use the <code><font style="color: rgb(128,128,128);">getMessage()</font></code> method anywhere in the <code><font style="color: rgb(51,102,255);">AccountService</font></code> to read the message
    ```
    messageSource.getMessage("account.name", null, Locale.ENGLISH);
    ```
