from rest_framework import viewsets, permissions
from .serializsers import LeadSerializers
from leads.models import Lead

# lead viewset
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    print(queryset)
    # permission - bu ruxsat beruvchi
    permission_classes = [
        permissions.AllowAny # barcha uchun ruxsat
    ]
    serializer_class = LeadSerializers