-- 1. 

SELECT matchid, player FROM goal 
  WHERE teamid = 'GER'

-- 2. 
SELECT id,stadium,team1,team2
  FROM game
WHERE game.id = 1012