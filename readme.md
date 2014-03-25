#Quizduell

This is the client implementation of a quizzduell like game. It is (and will probably be forever) in initial stage.

##Rest API
So far we don't have a broad understanding of the server API and therefore this document should be seen as a work in progress. We especially encourage the server team to contribute to this documentation to enhance our understanding of the server part and its REST API.

###Register

*URL:* `/register?name`

*Expects:* POST Request:

    {
    	name: "name"
    }

*Returns:*
####Unknown 

###Login

*URL:* `/login?name`

*Expects:* POST Request:

    {
    	name: "name"
    }

*Returns:*
####Unknown 

###Logout

*URL:* `/logout?name`

*Expects:* POST Request:

    {
    	name: "name"
    }

*Returns:*
####Unknown 

###Get Available Users (Why)?

*URL:*  `/user/available`

*Expects*: GET Request

*Returns:*
####Unknown 


###Start game

*URL:*  `/startGame`

*Expects*: GET Request

*Returns:*
    {
      "id": 26,
          "user1": {
           "name": "ben"
      },
      "user2": {
        "name": "ben2"
      },
      "questions": [
        {
          "question": {
            "question": "test2",
            "answer": [
              "1",
              "2",
              "3",
              "4"
            ],
            "correctAnswer": 2
          }
        },
        {
          "question": {
            "question": "test0",
            "answer": [
              "1",
              "2",
              "3",
              "4"
            ],
            "correctAnswer": 0
          }
        },
        {
          "question": {
            "question": "test3",
            "answer": [
              "1",
              "2",
              "3",
              "4"
            ],
            "correctAnswer": 3
          }
        },
        {
          "question": {
            "question": "test1",
            "answer": [
              "1",
              "2",
              "3",
              "4"
            ],
            "correctAnswer": 1
          }
        }
      ],
      "score1": -1,
      "score2": -1,
      "startTime": 1395735988698
    }

###End game

*URL:*  `/endGame`

*Expects:* GET Request
*Parameters:*
name   : string
id     : int
answer : query

*Returns:*
####Unknown 

###Get user list

*URL:*  `/user`

*Expects:* GET Request
*Parameters:*
####Unknown
*Returns:*
####Unknown 

