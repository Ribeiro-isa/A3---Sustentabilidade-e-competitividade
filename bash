# Criar tarefa
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title":"Reunião", "description":"Reunião com equipe", "date":"2025-06-20", "time":"15:00"}'

# Listar tarefas
curl http://localhost:3000/tasks

# Atualizar tarefa
curl -X PUT http://localhost:3000/tasks/<ID> -H "Content-Type: application/json" -d '{"status":"concluída"}'

# Deletar tarefa
curl -X DELETE http://localhost:3000/tasks/<ID>
