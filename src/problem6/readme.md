# Scoreboard API Service

I assume that Scoreboard API Service is integrated to existing system.

## Feature Overview

The **Scoreboard API Service** provides a real-time leaderboard. Users with authorization can increase their scores by completing specific actions. 

## Architecture
    
    Open file architecture.png for detail.

## Diagram for execution flow

    Open file activity-diagram.png for detail.

## API Documentation

### 1. Update Score

- **Endpoint**: `/api/update-score`
- **Method**: `POST`
- **Description**: Updates a user's score by a specified increment.
- **Authentication**: Required (Bearer token)
- **Parameters**:
  - `userId` (string): The ID of the user.
  - `scoreIncrement` (number): The amount to increase the score by (must be a positive integer between 1 and 100).
- **Response**:
  - `200 OK`: Score updated successfully.
  - `400 Bad Request`: Invalid request body.
  - `401 Unauthorized`: Authentication failed. (token is not valid)

**Example Request:**

    POST /api/update-score
    
    Authorization: Bearer <token>
    
    Request body:
    {
        "userId": "123",
        "scoreIncrement": 10
    }


**Example Response:**

```json
{
  "message": "Score updated successfully",
  "updatedScore": 100
}
```

### 2. Get top 10 highest score users

- **Endpoint**: `/api/leaderboard`
- **Method**: `GET`
- **Description**: Retrieves the top 10 users based on their scores, ordered in descending order.
- **Authentication**: None
- **Parameters**: None
- **Response**:
  - `200 OK`: List of top 10 users with their usernames and scores.

**Example Request:**

    GET /api/leaderboard

**Example Response:**

```json
{
    "data": [
                { "username": "user1", "score": 1000 },
                { "username": "user2", "score": 908 },
                { "username": "user3", "score": 900 },
                { "username": "user4", "score": 890 },
                { "username": "user5", "score": 888 },
                { "username": "user6", "score": 868 },
                { "username": "user7", "score": 850 },
                { "username": "user8", "score": 829 },
                { "username": "user9", "score": 800 },
                { "username": "user10", "score": 790 },
            ]
}
```

    
