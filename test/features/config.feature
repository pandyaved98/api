#@auth
#Feature: config module

#Scenario: get blacklisted words for alexjs Feature
#Given authorization with "reading" permission
#        And make a GET request to "/config/alex"
#        Then the response status code should be 200
#        And the response should be an array of strings

#Scenario: add new word to alexjs blackliste
#Given authorization with "writing" permission
#        And make a POST request to "/config/alex" with:
#        |words|["Forbidden1", "Forbidden2"]|
#        Then the response status code should be 201
#        And the response should be an array of strings

