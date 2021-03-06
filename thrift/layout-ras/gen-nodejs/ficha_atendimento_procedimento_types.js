//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var common_ttypes = require('./common_types')


var ttypes = module.exports = {};
FichaProcedimentoChildThrift = module.exports.FichaProcedimentoChildThrift = function(args) {
  this.numProntuario = null;
  this.cnsCidadao = null;
  this.dtNascimento = null;
  this.sexo = null;
  this.localAtendimento = null;
  this.turno = null;
  this.statusEscutaInicialOrientacao = null;
  this.procedimentos = null;
  this.dataHoraInicialAtendimento = null;
  this.dataHoraFinalAtendimento = null;
  this.cpfCidadao = null;
  if (args) {
    if (args.numProntuario !== undefined) {
      this.numProntuario = args.numProntuario;
    }
    if (args.cnsCidadao !== undefined) {
      this.cnsCidadao = args.cnsCidadao;
    }
    if (args.dtNascimento !== undefined) {
      this.dtNascimento = args.dtNascimento;
    }
    if (args.sexo !== undefined) {
      this.sexo = args.sexo;
    }
    if (args.localAtendimento !== undefined) {
      this.localAtendimento = args.localAtendimento;
    }
    if (args.turno !== undefined) {
      this.turno = args.turno;
    }
    if (args.statusEscutaInicialOrientacao !== undefined) {
      this.statusEscutaInicialOrientacao = args.statusEscutaInicialOrientacao;
    }
    if (args.procedimentos !== undefined) {
      this.procedimentos = args.procedimentos;
    }
    if (args.dataHoraInicialAtendimento !== undefined) {
      this.dataHoraInicialAtendimento = args.dataHoraInicialAtendimento;
    }
    if (args.dataHoraFinalAtendimento !== undefined) {
      this.dataHoraFinalAtendimento = args.dataHoraFinalAtendimento;
    }
    if (args.cpfCidadao !== undefined) {
      this.cpfCidadao = args.cpfCidadao;
    }
  }
};
FichaProcedimentoChildThrift.prototype = {};
FichaProcedimentoChildThrift.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.numProntuario = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.cnsCidadao = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.dtNascimento = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.sexo = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.localAtendimento = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.turno = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.BOOL) {
        this.statusEscutaInicialOrientacao = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.procedimentos = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.procedimentos.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I64) {
        this.dataHoraInicialAtendimento = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I64) {
        this.dataHoraFinalAtendimento = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.cpfCidadao = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FichaProcedimentoChildThrift.prototype.write = function(output) {
  output.writeStructBegin('FichaProcedimentoChildThrift');
  if (this.numProntuario !== null && this.numProntuario !== undefined) {
    output.writeFieldBegin('numProntuario', Thrift.Type.STRING, 1);
    output.writeString(this.numProntuario);
    output.writeFieldEnd();
  }
  if (this.cnsCidadao !== null && this.cnsCidadao !== undefined) {
    output.writeFieldBegin('cnsCidadao', Thrift.Type.STRING, 2);
    output.writeString(this.cnsCidadao);
    output.writeFieldEnd();
  }
  if (this.dtNascimento !== null && this.dtNascimento !== undefined) {
    output.writeFieldBegin('dtNascimento', Thrift.Type.I64, 3);
    output.writeI64(this.dtNascimento);
    output.writeFieldEnd();
  }
  if (this.sexo !== null && this.sexo !== undefined) {
    output.writeFieldBegin('sexo', Thrift.Type.I64, 4);
    output.writeI64(this.sexo);
    output.writeFieldEnd();
  }
  if (this.localAtendimento !== null && this.localAtendimento !== undefined) {
    output.writeFieldBegin('localAtendimento', Thrift.Type.I64, 5);
    output.writeI64(this.localAtendimento);
    output.writeFieldEnd();
  }
  if (this.turno !== null && this.turno !== undefined) {
    output.writeFieldBegin('turno', Thrift.Type.I64, 6);
    output.writeI64(this.turno);
    output.writeFieldEnd();
  }
  if (this.statusEscutaInicialOrientacao !== null && this.statusEscutaInicialOrientacao !== undefined) {
    output.writeFieldBegin('statusEscutaInicialOrientacao', Thrift.Type.BOOL, 7);
    output.writeBool(this.statusEscutaInicialOrientacao);
    output.writeFieldEnd();
  }
  if (this.procedimentos !== null && this.procedimentos !== undefined) {
    output.writeFieldBegin('procedimentos', Thrift.Type.LIST, 8);
    output.writeListBegin(Thrift.Type.STRING, this.procedimentos.length);
    for (var iter7 in this.procedimentos)
    {
      if (this.procedimentos.hasOwnProperty(iter7))
      {
        iter7 = this.procedimentos[iter7];
        output.writeString(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.dataHoraInicialAtendimento !== null && this.dataHoraInicialAtendimento !== undefined) {
    output.writeFieldBegin('dataHoraInicialAtendimento', Thrift.Type.I64, 10);
    output.writeI64(this.dataHoraInicialAtendimento);
    output.writeFieldEnd();
  }
  if (this.dataHoraFinalAtendimento !== null && this.dataHoraFinalAtendimento !== undefined) {
    output.writeFieldBegin('dataHoraFinalAtendimento', Thrift.Type.I64, 11);
    output.writeI64(this.dataHoraFinalAtendimento);
    output.writeFieldEnd();
  }
  if (this.cpfCidadao !== null && this.cpfCidadao !== undefined) {
    output.writeFieldBegin('cpfCidadao', Thrift.Type.STRING, 12);
    output.writeString(this.cpfCidadao);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

FichaProcedimentoMasterThrift = module.exports.FichaProcedimentoMasterThrift = function(args) {
  this.uuidFicha = null;
  this.tpCdsOrigem = null;
  this.headerTransport = null;
  this.atendProcedimentos = null;
  this.numTotalAfericaoPa = null;
  this.numTotalGlicemiaCapilar = null;
  this.numTotalAfericaoTemperatura = null;
  this.numTotalMedicaoAltura = null;
  this.numTotalCurativoSimples = null;
  this.numTotalMedicaoPeso = null;
  this.numTotalColetaMaterialParaExameLaboratorial = null;
  if (args) {
    if (args.uuidFicha !== undefined) {
      this.uuidFicha = args.uuidFicha;
    }
    if (args.tpCdsOrigem !== undefined) {
      this.tpCdsOrigem = args.tpCdsOrigem;
    }
    if (args.headerTransport !== undefined) {
      this.headerTransport = args.headerTransport;
    }
    if (args.atendProcedimentos !== undefined) {
      this.atendProcedimentos = args.atendProcedimentos;
    }
    if (args.numTotalAfericaoPa !== undefined) {
      this.numTotalAfericaoPa = args.numTotalAfericaoPa;
    }
    if (args.numTotalGlicemiaCapilar !== undefined) {
      this.numTotalGlicemiaCapilar = args.numTotalGlicemiaCapilar;
    }
    if (args.numTotalAfericaoTemperatura !== undefined) {
      this.numTotalAfericaoTemperatura = args.numTotalAfericaoTemperatura;
    }
    if (args.numTotalMedicaoAltura !== undefined) {
      this.numTotalMedicaoAltura = args.numTotalMedicaoAltura;
    }
    if (args.numTotalCurativoSimples !== undefined) {
      this.numTotalCurativoSimples = args.numTotalCurativoSimples;
    }
    if (args.numTotalMedicaoPeso !== undefined) {
      this.numTotalMedicaoPeso = args.numTotalMedicaoPeso;
    }
    if (args.numTotalColetaMaterialParaExameLaboratorial !== undefined) {
      this.numTotalColetaMaterialParaExameLaboratorial = args.numTotalColetaMaterialParaExameLaboratorial;
    }
  }
};
FichaProcedimentoMasterThrift.prototype = {};
FichaProcedimentoMasterThrift.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uuidFicha = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.tpCdsOrigem = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.headerTransport = new common_ttypes.UnicaLotacaoHeaderThrift();
        this.headerTransport.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.atendProcedimentos = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new ttypes.FichaProcedimentoChildThrift();
          elem14.read(input);
          this.atendProcedimentos.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.numTotalAfericaoPa = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.numTotalGlicemiaCapilar = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.numTotalAfericaoTemperatura = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I64) {
        this.numTotalMedicaoAltura = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I64) {
        this.numTotalCurativoSimples = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I64) {
        this.numTotalMedicaoPeso = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I64) {
        this.numTotalColetaMaterialParaExameLaboratorial = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FichaProcedimentoMasterThrift.prototype.write = function(output) {
  output.writeStructBegin('FichaProcedimentoMasterThrift');
  if (this.uuidFicha !== null && this.uuidFicha !== undefined) {
    output.writeFieldBegin('uuidFicha', Thrift.Type.STRING, 1);
    output.writeString(this.uuidFicha);
    output.writeFieldEnd();
  }
  if (this.tpCdsOrigem !== null && this.tpCdsOrigem !== undefined) {
    output.writeFieldBegin('tpCdsOrigem', Thrift.Type.I32, 2);
    output.writeI32(this.tpCdsOrigem);
    output.writeFieldEnd();
  }
  if (this.headerTransport !== null && this.headerTransport !== undefined) {
    output.writeFieldBegin('headerTransport', Thrift.Type.STRUCT, 3);
    this.headerTransport.write(output);
    output.writeFieldEnd();
  }
  if (this.atendProcedimentos !== null && this.atendProcedimentos !== undefined) {
    output.writeFieldBegin('atendProcedimentos', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRUCT, this.atendProcedimentos.length);
    for (var iter15 in this.atendProcedimentos)
    {
      if (this.atendProcedimentos.hasOwnProperty(iter15))
      {
        iter15 = this.atendProcedimentos[iter15];
        iter15.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.numTotalAfericaoPa !== null && this.numTotalAfericaoPa !== undefined) {
    output.writeFieldBegin('numTotalAfericaoPa', Thrift.Type.I64, 5);
    output.writeI64(this.numTotalAfericaoPa);
    output.writeFieldEnd();
  }
  if (this.numTotalGlicemiaCapilar !== null && this.numTotalGlicemiaCapilar !== undefined) {
    output.writeFieldBegin('numTotalGlicemiaCapilar', Thrift.Type.I64, 6);
    output.writeI64(this.numTotalGlicemiaCapilar);
    output.writeFieldEnd();
  }
  if (this.numTotalAfericaoTemperatura !== null && this.numTotalAfericaoTemperatura !== undefined) {
    output.writeFieldBegin('numTotalAfericaoTemperatura', Thrift.Type.I64, 7);
    output.writeI64(this.numTotalAfericaoTemperatura);
    output.writeFieldEnd();
  }
  if (this.numTotalMedicaoAltura !== null && this.numTotalMedicaoAltura !== undefined) {
    output.writeFieldBegin('numTotalMedicaoAltura', Thrift.Type.I64, 8);
    output.writeI64(this.numTotalMedicaoAltura);
    output.writeFieldEnd();
  }
  if (this.numTotalCurativoSimples !== null && this.numTotalCurativoSimples !== undefined) {
    output.writeFieldBegin('numTotalCurativoSimples', Thrift.Type.I64, 9);
    output.writeI64(this.numTotalCurativoSimples);
    output.writeFieldEnd();
  }
  if (this.numTotalMedicaoPeso !== null && this.numTotalMedicaoPeso !== undefined) {
    output.writeFieldBegin('numTotalMedicaoPeso', Thrift.Type.I64, 10);
    output.writeI64(this.numTotalMedicaoPeso);
    output.writeFieldEnd();
  }
  if (this.numTotalColetaMaterialParaExameLaboratorial !== null && this.numTotalColetaMaterialParaExameLaboratorial !== undefined) {
    output.writeFieldBegin('numTotalColetaMaterialParaExameLaboratorial', Thrift.Type.I64, 11);
    output.writeI64(this.numTotalColetaMaterialParaExameLaboratorial);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

