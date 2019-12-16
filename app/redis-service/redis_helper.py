import json
import os
import sys
import requests
from redis import Redis
from dotenv import load_dotenv

load_dotenv()
def env(key):
    return os.getenv(key)

redis = Redis(host=env("REDIS_HOST"), port=env("REDIS_PORT"), db=env("REDIS_DB"))
