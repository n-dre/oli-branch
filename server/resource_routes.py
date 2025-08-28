from flask import Blueprint, request
from .models import EducationalResource, GovernmentResource

resource_routes = Blueprint('resources', __name__)

@resource_routes.route('/educational', methods=['GET'])
def get_educational_resources():
    try:
        # Optional: filter by category or topic
        category = request.args.get('category')
        query = EducationalResource.query

        if category:
            query = query.filter_by(category=category)

        resources = query.all()
        return jsonify([resource.to_dict() for resource in resources]), 200

    except Exception as e:
        return jsonify({'error': 'Failed to fetch educational resources', 'details': str(e)}), 500


@resource_routes.route('/government', methods=['GET'])
def get_government_resources():
    try:
        # Optional: filter by type or location
        res_type = request.args.get('type')
        location = request.args.get('location')

        query = GovernmentResource.query

        if res_type:
            query = query.filter_by(type=res_type)
        if location:
            query = query.filter(GovernmentResource.location.ilike(f"%{location}%"))

        resources = query.all()
        return jsonify([resource.to_dict() for resource in resources]), 200

    except Exception as e:
        return jsonify({'error': 'Failed to fetch government resources', 'details': str(e)}), 500
