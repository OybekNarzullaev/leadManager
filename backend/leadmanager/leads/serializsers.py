from .models import Lead
from rest_framework import serializers

# lead serializers bu ma'lumotlarni json ga o'tkazish uchun kerak
class LeadSerializers(serializers.ModelSerializer):
    class Meta:
        model=Lead
        fields="__all__"