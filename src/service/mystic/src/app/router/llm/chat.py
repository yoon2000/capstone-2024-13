from fastapi 		import APIRouter, HTTPException
from pydantic 		import BaseModel
from app.connection	import connection
from bson.objectid import ObjectId

router = APIRouter(prefix="/chat", tags=["chat"])

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError('Invalid ObjectId')
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type='string')

class ChatInvokeRequest(BaseModel):
    connection_id: str
    content: str

class ChatInvokeResponse(BaseModel):
	content: str

@router.post("/invoke", response_model=ChatInvokeResponse)
async def invoke(request: ChatInvokeRequest):
	if connection.get(request.connection_id) is None:
		raise HTTPException(status_code=400, detail="Bad Request")
	tmp = connection[request.connection_id](request.content)['text']
	print('tmp:')
	print(tmp)
	return ChatInvokeResponse(content=tmp)