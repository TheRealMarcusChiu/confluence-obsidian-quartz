---
title: "Java - Mockito - ArgumentMatcher - AdditionalMatcher - Custom ArgumentMatcher"
created: 2022-03-11T17:46:21.050-06:00
modified: 2022-03-11T17:59:13.883-06:00
parent: "[[Java - Mockito]]"
children: []
---
# 2 Ways in Configuring Mocked Methods
###### Fixed Values
```
doReturn("Flower").when(flowerService).analyze("poppy");
```
###### ArgumentMatchers
```
when(flowerService.analyze(anyString())).thenReturn("Flower");
```
# ArgumentMatchers - Restrictions
###### Mockito requires ALL provided arguments to be: ArgumentMatchers or Exact Values
```
when(mock.isABigFlower("poppy", anyInt())).thenReturn(true); <-- BAD
when(mock.isABigFlower(eq("poppy"), anyInt())).thenReturn(true); <-- GOOD using eq() ArgumentMatcher
```

Here are two more points to take care when ArgumentMatchers are used:
- we can't use ArgumentMatchers outside of verification or stubbing
- we can't use them as a return value, an exact value is required when stubbing calls

# AdditionalMatchers - not() and() or()

<em>Mockito</em> also provides <em>AdditionalMatchers</em> to implement common logical operations (‘not’, ‘and’, ‘or’) on <em>ArgumentMatchers</em> that match both primitive and non-primitive types:
```
verify(mock).analyze(or(eq("poppy"), endsWith("y")));
```
# Custom ArgumentMatcher
###### Problem
```
verify(messageService, times(1)).deliverMessage(any(Message.class));
```

This approach doesn't let us validate the data inside the Message
###### Solution

Implement a custom ArgumentMatcher
```
public class MessageMatcher implements ArgumentMatcher<Message> {

    private Message left;

    // constructors

    @Override
    public boolean matches(Message right) {
        return left.getFrom().equals(right.getFrom()) &&
          left.getTo().equals(right.getTo()) &&
          left.getText().equals(right.getText()) &&
          right.getDate() != null &&
          right.getId() != null;
    }
}
```
```
verify(messageService, times(1)).deliverMessage(argThat(new MessageMatcher(message)));
```
# Custom ArgumentMatcher vs ArgumentCaptor

see: [[Java - Mockito - ArgumentCaptor vs Custom ArgumentMatcher]]
