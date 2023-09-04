import json
import pandas as pd


df = pd.read_csv("trivia.csv")
df = df.fillna("")
df = df[df['Tema']!= ""]

df = df.rename(columns={
    "Tema": "topic",
    "Pregunta": "text",
    "Respuesta correcta": "answer",
    "Respuesta incorrecta 1": "incorrectAnswers1",
    "Respuesta incorrecta 2": "incorrectAnswers2",
    "Descripción (mensaje que se obtiene al elegir la respuesta)": "description",
})

df = df.drop(columns=["Pregunta Nº"])
df = df[df['topic']!="Elecciones 2021"]

data = df.to_dict(orient='records')

for d in data:
    d['incorrectAnswers'] = [d['incorrectAnswers1'], d['incorrectAnswers2']]

# Iterar a través de cada diccionario en la lista
for d in data:
    # Eliminar la clave de cada diccionario (si existe)
    d.pop("incorrectAnswers1", None)
    d.pop("incorrectAnswers2", None)


with open('questions.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=4)    