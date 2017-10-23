1. SELECT matchid, player FROM goal

  WHERE teamid = 'GER'
2. SELECT id,stadium,team1,team2
  FROM game WHERE id=1012
3. SELECT player, teamid, stadium, mdate
  FROM game JOIN goal ON (id=matchid)
  WHERE teamid='GER'
4. SELECT team1, team2, player
FROM game JOIN goal ON (id=matchid) 
WHERE player LIKE 'Mario%'
5. SELECT player, teamid, coach, gtime
  FROM goal JOIN eteam on teamid=id
 WHERE gtime<=10
6. SELECT mdate, teamname
FROM game JOIN eteam ON (team1=eteam.id)
WHERE coach='Fernando Santos'
7. SELECT player 
FROM goal JOIN game ON (game.id=matchid)
WHERE stadium = 'National Stadium, Warsaw'
8.  