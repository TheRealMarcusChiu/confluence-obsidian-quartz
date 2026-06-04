---
title: "Java - Lombok - @Delegate (Automate Object Composition)"
created: 2021-05-08T14:12:16.208-05:00
modified: 2021-05-08T14:19:08.607-05:00
parent: "[[Java - Lombok]]"
children: []
---
Lombok's @Delegate comes in very handy when you want to use this programming pattern. Let's consider an example:
- We want <em>User</em>s and <em>Customer</em>s to share some common attributes for naming and phone number
- We define both an interface and an adapter class for these fields
- We'll have our models implement the interface and <em>@Delegate</em> to their adapter, effectively <em>composing</em> them with our contact information

# 1 - Define Interface and Adaptor as Support Class
```
public interface HasContactInformation {

    String getFirstName();
    void setFirstName(String firstName);
    String getFullName();
    String getLastName();
    void setLastName(String lastName);

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    class ContactInformationSupport implements HasContactInformation {

        private String firstName;
        private String lastName;

        @Override
        public String getFullName() {
            return getFirstName() + " " + getLastName();
        }
    }
}
```
# 2 - Utilizing in Both User.java and Customer.java Class
```
public class User implements HasContactInformation {
    @Delegate(types = {HasContactInformation.class})
    private ContactInformationSupport contactInformation = new ContactInformationSupport();
}

// With Builder
@Data
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class Customer implements HasContactInformation {
    @Delegate(types = {HasContactInformation.class})
    private ContactInformationSupport contactInformation = new ContactInformationSupport();

    public static Customer.CustomerBuilder builder() {
        return new Customer().toBuilder();
    }

    public static class CustomerBuilder {

        public Customer.CustomerBuilder firstName(String firstName) {
            if (this.contactInformation == null) this.contactInformation = new ContactInformationSupport();
            this.contactInformation.setFirstName(firstName);
            return this;
        }

        public Customer.CustomerBuilder lastName(String lastName) {
            if (this.contactInformation == null) this.contactInformation = new ContactInformationSupport();
            this.contactInformation.setLastName(lastName);
            return this;
        }
    }
}
```
