---
title: "RDF vs RDFS vs OWL"
created: 2021-09-13T04:44:25.786-05:00
modified: 2022-11-23T18:56:34.262-06:00
parent: "[[Ontology Languages - Comparisons]]"
children: []
---
comparing
- [[Resource Description Framework (RDF)]]
- [[RDF Schema (RDFS)]]
- [[Web Ontology Language (OWL)]]

The choice of one over the other depends on how much complexity the situation you are modeling requires.
# Resource Description Framework (RDF)

Focused on mapping instances to their types (i.e. <code><font style="color: rgb(122,134,154);">rdf:type</font></code>), and the instances' custom properties

Example of RDF serialized in Turtle:
```
@prefix : <http://www.example.org/> .
:john		rdf:type	:Man .
:john		:livesIn	"New-York" .
:livesIn	rdf:type	rdf:Property .
```
# RDF Schema (RDFS)

Builds upon RDF by providing a mechanism for describing groups of related resources (i.e. <code><font style="color: rgb(122,134,154);">rdfs:subClassOf</font></code>, <code><font style="color: rgb(122,134,154);">rdfs:range</font></code>, and/or <code><font style="color: rgb(122,134,154);">rdfs:domain</font></code>). A <strong>reasoner</strong> can then expand on this. For instance, if you have triples <code><font style="color: rgb(122,134,154);">John rdf:type Man</font></code> and <font style="color: rgb(122,134,154);"><code>Man rdfs:subClassOf</code> <code>Human</code></font> then you can generate the triple <code><font style="color: rgb(122,134,154);">John rdf:type Human</font></code>. This is not possible to do with RDF alone.

Example of RDFS serialized in Turtle:
```
@prefix : <http://www.example.org/> .
:john		rdf:type 			:Man .
:Man    	rdfs:subClassOf		:Human .
:john    	:livesIn  			"New-York" .
:livesIn    rdf:type    		rdf:Property .
# After reasoning
:john    	rdf:type			:Human .
```
# Web Ontology Language (OWL)

Builds upon RDFS (i.e. <code><font style="color: rgb(122,134,154);">owl:Class</font></code>, <code><font style="color: rgb(122,134,154);">owl:DatatypeProperty</font></code>, <code><font style="color: rgb(122,134,154);">owl:NamedIndividual</font></code>, etc). OWL relies heavily on the reasoner, it is possible to express complex constructs such as chained properties for instance, or restrictions between classes. OWL serves to build [[Ontology|ontologies]] or schema on top of RDF datasets.

Example of OWL constructs serialized in Turtle.
```
@prefix : <http://www.example.org/> .
:livesIn	rdf:type		owl:DatatypeProperty .
:Human    	rdf:type    	owl:Class .
:Man   		rdf:type    	owl:Class .
:Man    	rdfs:subClassOf	:Human .
:John    	rdf:type    	:Man . 
:John    	rdf:type    	owl:NamedIndividual .
```
