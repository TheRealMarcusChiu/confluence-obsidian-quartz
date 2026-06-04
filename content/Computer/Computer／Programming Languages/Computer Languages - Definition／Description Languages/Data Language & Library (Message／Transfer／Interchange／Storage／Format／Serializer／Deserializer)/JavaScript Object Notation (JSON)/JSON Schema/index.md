---
title: "JSON Schema"
created: 2021-10-10T17:55:05.869-05:00
modified: 2021-11-24T22:00:59.255-06:00
parent: "[[JavaScript Object Notation (JSON)]]"
children: []
---
###### JSON Schema ([https://json-schema.org/](https://json-schema.org/))
- a type of [[Schema Definition／Description Language & Libraries (SDL)|Schema Definition Language (SDL)]] written in [[JavaScript Object Notation (JSON)|JSON]]
- defines the structure and the legal elements of a [[JavaScript Object Notation (JSON)|JSON]] document
- similar to [[XML Schema Definition (XSD)]]

# Defining a JSON Schema

The following is a simple <em>JSON Object</em> representing a product catalog:
```
{
    "id": 1,
    "name": "Lampshade",
    "price": 0
}
```

We could define its<em> JSON Schema</em> as follow:
```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Product",
    "description": "A product from the catalog",
    "type": "object",
    "properties": {
        "id": {
            "description": "The unique identifier for a product",
            "type": "integer"
        },
        "name": {
            "description": "Name of the product",
            "type": "string"
        },
        "price": {
            "type": "number",
            "minimum": 0,
            "exclusiveMinimum": true
        }
    },
    "required": ["id", "name", "price"]
}
```

As we can see a <em>JSON Schema</em> is a <em>JSON document</em>, and that document MUST be an object. Object members (or properties) defined by <em>JSON Schema</em> are called <strong><em>keywords</em></strong>.

Let's explain the keywords that we have used in our sample:
- The <strong><em>\$schema</em></strong> keyword states that this schema is written according to the draft v4 specification.
- The <strong><em>title</em></strong> and <strong><em>description </em></strong>keywords are descriptive only, in that they do not add constraints to the data being validated. The intent of the schema is stated with these two keywords: describes a product.
- The <strong><em>type</em></strong> keyword <strong>defines the first constraint</strong> on our <em>JSON</em> data: it <strong>has to be</strong> a <em>JSON Object</em>.

Also, a JSON Schema MAY contain properties that are not schema keywords. In our case <em><strong>id</strong></em>, <strong><em>name</em></strong>, <strong><em>price</em> </strong>will be members (or properties) of the <em>JSON Object</em>.

For each property, we can define the <strong><em>type</em></strong>. We defined <em>id</em> and <em>name</em> as <strong><em>string</em> </strong>and <em>price</em> as <em><strong>number</strong></em>. In <em>JSON Schema</em> a number can have a minimum. By default this minimum is inclusive, so we need to specify <strong><em>exclusiveMinimum</em></strong>.

Finally, the <em>Schema</em> tells that <em>id</em>, <em>name</em>, and <em>price</em> are <em><strong>required</strong></em>.
# Resources
- [https://json-schema.org/](https://json-schema.org/)
- [https://www.baeldung.com/introduction-to-json-schema-in-java](https://www.baeldung.com/introduction-to-json-schema-in-java)
