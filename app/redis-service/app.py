from redis_helper import *
import flask
from flask import jsonify
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
CORS(app)

@app.route("/")
def home_():
    return jsonify({
        "api":{
                "/api/getAll?api-key={api-key}":"returns a dictionary of all keys and corresponding values in redis cache",
                "/api/get?key={key}&api-key={api-key}":"returns value of input key",
                "/api/set?key={key}&value={value}&api-key={api-key}": "adds new entry to redis cache if key does not exist, else updates entry",
                "/api/clear?api-key={api-key}": "deletes all entries in the redis cache",
                "/api/delete?keys={key1},{key2},{key3}&api-key={api-key}": "deletes list of keys (delimited by ',')"        
            },
        "IMPORTANT": "you MUST include an api-key to use any of the api"
    })

@app.route("/api/getAll")
def getAll_():
    try:
        args = flask.request.args
        if args["api-key"] != env("API_KEY"):
            return jsonify({"status":"failure","error":"access denied"})

        keys = [i.decode("utf-8") for i in redis.keys("*")]
        return jsonify({k:redis.get(k).decode("utf-8") for k in keys})

    except Exception as err:
        return jsonify({"status":"failure","error":str(err)})


@app.route("/api/get")
def get_():
    try:
        args = flask.request.args
        if args["api-key"] != env("API_KEY"):
            return jsonify({"status":"failure","error":"access denied"})
        
        key = args["key"]
        return jsonify({key:redis.get(key).decode("utf-8")})

    except Exception as err:
        return jsonify({"status":"failure","error":str(err)})


@app.route("/api/set")
def set_():
    try:
        args = flask.request.args
        if args["api-key"] != env("API_KEY"):
            return jsonify({"status":"denied"})

        key = args["key"]
        value = args["value"]
        success = redis.set(key, value)

        return jsonify({"status":{True:"success",False:"failure"}[success]})
    
    except Exception as err:
        return jsonify({"status":"failure","error":str(err)})


@app.route("/api/clear")
def clear_():
    try:
        args = flask.request.args
        if args["api-key"] != env("API_KEY"):
            return jsonify({"status":"denied"})
        
        return jsonify({"status": {True:"success", False:"failure"}[redis.flushall()]})

    except Exception as err:
        return jsonify({"status":"failure","error":str(err)})
  

@app.route("/api/delete")
def delete_():
    try:
        args = flask.request.args
        if args["api-key"] != env("API_KEY"):
            return jsonify({"status":"denied"})
        
        keys = [i.strip() for i in args["keys"].split(",")]
            
        num_deleted = 0
        deleted = []
        for key in keys:
            if redis.delete(key):
                num_deleted += 1
                deleted.append(key)

        return jsonify({"number of keys deleted successfully":f"{num_deleted} out of {len(keys)}", "keys deleted":deleted})
             
    except Exception as err:
        return jsonify({"status":"failure","error":str(err)})


if __name__ == '__main__':  
   app.run(debug={"True":True,"False":False}[env("DEBUG")], port="5000")
