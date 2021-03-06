from django.db import models

from db.models.abstract.access_catalog import HostAccessCatalog


class RegistryAccess(HostAccessCatalog):
    insecure = models.NullBooleanField(default=False)

    class Meta(HostAccessCatalog.Meta):
        pass
