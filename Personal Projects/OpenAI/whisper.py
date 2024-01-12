import os
import openai

API_KEY = "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"
openai.api_key = API_KEY

model_id = "whisper-1"

media_file_path = "C:/Users/Dell/Documents/Sound recordings/whisper_voice_sample.m4a"
media_file = open(media_file_path, 'rb')

response = openai.Audio.transcribe(
    api_key=API_KEY,
    model=model_id,
    file=media_file
)

print(response)