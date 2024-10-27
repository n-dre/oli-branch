from flask import Blueprint, jsonify
from .models import EducationalResource, GovernmentResource

resource_routes = Blueprint('resources', __name__)

@resource_routes.route('/educational', methods=['GET'])
def get_educational_resources():
    resources = EducationalResource.query.all()
    return jsonify([resource.to_dict() for resource in resources])

@resource_routes.route('/government', methods=['GET'])
def get_government_resources():
    resources = GovernmentResource.query.all()
    return jsonify([resource.to_dict() for resource in resources])
