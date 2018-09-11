# Functional spec

## Overview

Knowledge Chef is a knowledge database. The user writes *recipes* that can be either a how-to, a bug fix or a workaround to a common problem.

## Jargon

* *Recipe* : Entry that is either a how-to, a bug fix or a workaround.

* *Database* : Collection of recipes. Doesn't have to actually be a database, could very well be just a collection of files.

## Scenarios

**Ava** wants to try out the app by entering a quick recipe about how to test connection to a database. 

1. She opens the app. She should see a very obvious *"New"* button.

2. She should be able to choose whether to make this new recipe a how-to, a bug fix or a workaround.

3. She clicks on it. She should see *"Editor page"*.

**Bogart** already has recipes in his database. He wants to look up a solution to a problem he already encountered before.

1. He opens up the app. He should see the last few entries in his recipe database.

2. He starts typing right away (no clicking) something like "restart tomcat".

3. He should see, as he's typing, the top results for his search crop up to the top of the list of entries in his database.

**Claire** has an extensive database that she wishes to access from another computer.

1. She accesses a folder with all of her data in it.

2. She copies it to another computer. She opens up the app on the new computer. She should be able to choose what folder of data Knowledge Chef uses.

3. After a short loading time, she sees the last entries of her database, just like on the old computer.

## Non goals

As of writing of this document, this app is not scheduled to support the following features :

* Sharing knowledge databases via the cloud.

## Screens

## Open questions

## Roadmap
